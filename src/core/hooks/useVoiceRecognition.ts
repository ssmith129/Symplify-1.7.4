import { useState, useCallback, useRef, useEffect } from 'react';

// Web Speech API type definitions
interface SpeechRecognitionEvent extends Event {
  resultIndex: number;
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionResultList {
  length: number;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  isFinal: boolean;
  length: number;
  [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
  message: string;
}

interface SpeechRecognitionInstance extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
}

interface VoiceRecognitionOptions {
  continuous?: boolean;
  interimResults?: boolean;
  language?: string;
  maxDuration?: number;
  onResult?: (transcript: string, isFinal: boolean) => void;
  onError?: (error: string) => void;
  onEnd?: () => void;
}

interface VoiceRecognitionState {
  isListening: boolean;
  isSupported: boolean;
  transcript: string;
  interimTranscript: string;
  error: string | null;
}

interface VoiceRecognitionReturn extends VoiceRecognitionState {
  startListening: () => void;
  stopListening: () => void;
  resetTranscript: () => void;
}

/**
 * Feature 9: Voice Documentation Assistant - Voice Recognition Hook
 * Custom hook for browser-based speech recognition
 */
export const useVoiceRecognition = (
  options: VoiceRecognitionOptions = {}
): VoiceRecognitionReturn => {
  const {
    continuous = true,
    interimResults = true,
    language = 'en-US',
    maxDuration = 300000, // 5 minutes default
    onResult,
    onError,
    onEnd,
  } = options;

  const [state, setState] = useState<VoiceRecognitionState>({
    isListening: false,
    isSupported: false,
    transcript: '',
    interimTranscript: '',
    error: null,
  });

  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Check browser support
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    
    setState((prev) => ({
      ...prev,
      isSupported: !!SpeechRecognition,
    }));

    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = continuous;
      recognitionRef.current.interimResults = interimResults;
      recognitionRef.current.lang = language;

      recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
        let finalTranscript = '';
        let interimTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          } else {
            interimTranscript += transcript;
          }
        }

        if (finalTranscript) {
          setState((prev) => ({
            ...prev,
            transcript: prev.transcript + finalTranscript,
            interimTranscript: '',
          }));
          onResult?.(finalTranscript, true);
        } else {
          setState((prev) => ({
            ...prev,
            interimTranscript,
          }));
          onResult?.(interimTranscript, false);
        }
      };

      recognitionRef.current.onerror = (event: SpeechRecognitionErrorEvent) => {
        const errorMessage = `Speech recognition error: ${event.error}`;
        setState((prev) => ({
          ...prev,
          error: errorMessage,
          isListening: false,
        }));
        onError?.(errorMessage);
      };

      recognitionRef.current.onend = () => {
        setState((prev) => ({
          ...prev,
          isListening: false,
        }));
        onEnd?.();
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [continuous, interimResults, language, onResult, onError, onEnd]);

  const startListening = useCallback(() => {
    if (!recognitionRef.current) {
      setState((prev) => ({
        ...prev,
        error: 'Speech recognition not supported',
      }));
      return;
    }

    setState((prev) => ({
      ...prev,
      isListening: true,
      error: null,
    }));

    try {
      recognitionRef.current.start();

      // Set max duration timeout
      if (maxDuration > 0) {
        timeoutRef.current = setTimeout(() => {
          stopListening();
        }, maxDuration);
      }
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: 'Failed to start speech recognition',
        isListening: false,
      }));
    }
  }, [maxDuration]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setState((prev) => ({
      ...prev,
      isListening: false,
    }));
  }, []);

  const resetTranscript = useCallback(() => {
    setState((prev) => ({
      ...prev,
      transcript: '',
      interimTranscript: '',
    }));
  }, []);

  return {
    ...state,
    startListening,
    stopListening,
    resetTranscript,
  };
};

// Type declarations for Web Speech API
declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognitionInstance;
    webkitSpeechRecognition: new () => SpeechRecognitionInstance;
  }
}

export default useVoiceRecognition;
