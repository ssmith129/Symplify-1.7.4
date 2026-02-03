
import { Link } from "react-router";

const FormCheckboxRadios = () => {
  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
            <div className="flex-grow-1">
              <h4 className="fs-18 fw-semibold mb-0">Checks &amp; Radios</h4>
            </div>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Base UI</Link>
                </li>
                <li className="breadcrumb-item active">Checks &amp; Radios</li>
              </ol>
            </div>
          </div>
          {/* End Page Header */}
          {/* start row */}
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Checkboxes</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Each checkbox and radio <code>&lt;input&gt;</code> and
                    <code>&lt;label&gt;</code> pairing is wrapped in a
                    <code>&lt;div&gt;</code> to create our custom control.
                    Structurally, this is the same approach as our default
                    <code>.form-check</code>.
                  </p>
                  <div className="mt-3">
                    <div className="form-check mb-1">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customCheck1"
                      >
                        Check this custom checkbox
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customCheck2"
                      >
                        Check this custom checkbox
                      </label>
                    </div>
                  </div>
                  <h6 className="fs-15 mt-3">Inline</h6>
                  <div className="mt-2">
                    <div className="form-check form-check-inline">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customCheck3"
                      >
                        Check this custom checkbox
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck4"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customCheck4"
                      >
                        Check this custom checkbox
                      </label>
                    </div>
                  </div>
                  <h6 className="fs-15 mt-3">Disabled</h6>
                  <div className="mt-2">
                    <div className="form-check form-check-inline">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck5"
                        defaultChecked
                        disabled
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customCheck5"
                      >
                        Check this custom checkbox
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck6"
                        disabled
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customCheck6"
                      >
                        Check this custom checkbox
                      </label>
                    </div>
                  </div>
                  <h6 className="fs-15 mt-3">Colors</h6>
                  <div className="form-check mb-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheckcolor1"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customCheckcolor1"
                    >
                      Default Checkbox
                    </label>
                  </div>
                  <div className="form-check form-checkbox-success mb-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheckcolor2"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customCheckcolor2"
                    >
                      Success Checkbox
                    </label>
                  </div>
                  <div className="form-check form-checkbox-info mb-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheckcolor3"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customCheckcolor3"
                    >
                      Info Checkbox
                    </label>
                  </div>
                  <div className="form-check form-checkbox-secondary mb-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheckcolor6"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customCheckcolor6"
                    >
                      Secondary Checkbox
                    </label>
                  </div>
                  <div className="form-check  form-checkbox-warning mb-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheckcolor4"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customCheckcolor4"
                    >
                      Warning Checkbox
                    </label>
                  </div>
                  <div className="form-check form-checkbox-danger mb-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheckcolor5"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customCheckcolor5"
                    >
                      Danger Checkbox
                    </label>
                  </div>
                  <div className="form-check form-checkbox-dark">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheckcolor7"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customCheckcolor7"
                    >
                      Dark Checkbox
                    </label>
                  </div>
                  <h6 className="fs-15 mt-3">Without Labels</h6>
                  <div>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkboxNoLabel"
                      aria-label="..."
                    />
                  </div>
                  <h6 className="fs-15 mt-3">Checkbox toggle buttons</h6>
                  <div className="mb-3">
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btn-check"
                    />
                    <label className="btn btn-primary" htmlFor="btn-check">
                      Single toggle
                    </label>
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btn-check-2"
                      defaultChecked
                    />
                    <label className="btn btn-primary" htmlFor="btn-check-2">
                      Checked
                    </label>
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btn-check-3"
                      disabled
                    />
                    <label className="btn btn-primary" htmlFor="btn-check-3">
                      Disabled
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btn-check-4"
                    />
                    <label className="btn" htmlFor="btn-check-4">
                      Single toggle
                    </label>
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btn-check-5"
                      defaultChecked
                    />
                    <label className="btn" htmlFor="btn-check-5">
                      Checked
                    </label>
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btn-check-6"
                      disabled
                    />
                    <label className="btn" htmlFor="btn-check-6">
                      Disabled
                    </label>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Radios</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Each checkbox and radio <code>&lt;input&gt;</code> and
                    <code>&lt;label&gt;</code> pairing is wrapped in a
                    <code>&lt;div&gt;</code> to create our custom control.
                    Structurally, this is the same approach as our default
                    <code>.form-check</code>.
                  </p>
                  <div className="mt-3">
                    <div className="form-check mb-1">
                      <input
                        type="radio"
                        id="customRadio1"
                        name="customRadio"
                        className="form-check-input"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customRadio1"
                      >
                        Toggle this custom radio
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="customRadio2"
                        name="customRadio"
                        className="form-check-input"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customRadio2"
                      >
                        Or toggle this other custom radio
                      </label>
                    </div>
                  </div>
                  <h6 className="fs-15 mt-3">Inline</h6>
                  <div className="mt-2">
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        id="customRadio3"
                        name="customRadio1"
                        className="form-check-input"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customRadio3"
                      >
                        Toggle this custom radio
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        id="customRadio4"
                        name="customRadio1"
                        className="form-check-input"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customRadio4"
                      >
                        Or toggle this other custom radio
                      </label>
                    </div>
                  </div>
                  <h6 className="fs-15 mt-3">Disabled</h6>
                  <div className="mt-2">
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        id="customRadio5"
                        name="customRadio2"
                        className="form-check-input"
                        disabled
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customRadio5"
                      >
                        Toggle this custom radio
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        id="customRadio6"
                        name="customRadio2"
                        className="form-check-input"
                        defaultChecked
                        disabled
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customRadio6"
                      >
                        Or toggle this other custom radio
                      </label>
                    </div>
                  </div>
                  <h6 className="fs-15 mt-3">Colors</h6>
                  <div className="form-check mb-2">
                    <input
                      type="radio"
                      id="customRadiocolor1"
                      name="customRadiocolor1"
                      className="form-check-input"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customRadiocolor1"
                    >
                      Default Radio
                    </label>
                  </div>
                  <div className="form-check form-radio-success mb-2">
                    <input
                      type="radio"
                      id="customRadiocolor2"
                      name="customRadiocolor2"
                      className="form-check-input"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customRadiocolor2"
                    >
                      Success Radio
                    </label>
                  </div>
                  <div className="form-check form-radio-info mb-2">
                    <input
                      type="radio"
                      id="customRadiocolor3"
                      name="customRadiocolor3"
                      className="form-check-input"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customRadiocolor3"
                    >
                      Info Radio
                    </label>
                  </div>
                  <div className="form-check form-radio-secondary mb-2">
                    <input
                      type="radio"
                      id="customRadiocolor6"
                      name="customRadiocolor6"
                      className="form-check-input"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customRadiocolor6"
                    >
                      Secondary Radio
                    </label>
                  </div>
                  <div className="form-check form-radio-warning mb-2">
                    <input
                      type="radio"
                      id="customRadiocolor4"
                      name="customRadiocolor4"
                      className="form-check-input"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customRadiocolor4"
                    >
                      Warning Radio
                    </label>
                  </div>
                  <div className="form-check form-radio-danger mb-2">
                    <input
                      type="radio"
                      id="customRadiocolor5"
                      name="customRadiocolor5"
                      className="form-check-input"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customRadiocolor5"
                    >
                      Danger Radio
                    </label>
                  </div>
                  <div className="form-check form-radio-dark">
                    <input
                      type="radio"
                      id="customRadiocolor7"
                      name="customRadiocolor7"
                      className="form-check-input"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customRadiocolor7"
                    >
                      Dark Radio
                    </label>
                  </div>
                  <h6 className="fs-15 mt-3">Without Labels</h6>
                  <div>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radioNoLabel"
                      id="radioNoLabel1"
                      aria-label="..."
                    />
                  </div>
                  <h6 className="fs-15 mt-3">Radio toggle buttons</h6>
                  <div className="mb-3">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options"
                      id="option1"
                      defaultChecked
                    />
                    <label className="btn btn-secondary" htmlFor="option1">
                      Checked
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="options"
                      id="option2"
                    />
                    <label className="btn btn-secondary" htmlFor="option2">
                      Radio
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="options"
                      id="option3"
                      disabled
                    />
                    <label className="btn btn-secondary" htmlFor="option3">
                      Disabled
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="options"
                      id="option4"
                    />
                    <label className="btn btn-secondary" htmlFor="option4">
                      Radio
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-base"
                      id="option5"
                      defaultChecked
                    />
                    <label className="btn" htmlFor="option5">
                      Checked
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-base"
                      id="option6"
                    />
                    <label className="btn" htmlFor="option6">
                      Radio
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-base"
                      id="option7"
                      disabled
                    />
                    <label className="btn" htmlFor="option7">
                      Disabled
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-base"
                      id="option8"
                    />
                    <label className="btn" htmlFor="option8">
                      Radio
                    </label>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card card-h-100">
                <div className="card-header">
                  <h5 className="card-title">Reverse</h5>
                </div>
                <div className="card-body">
                  <div className="form-check form-check-reverse mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                
                      id="reverseCheck1"
                    />
                    <label className="form-check-label" htmlFor="reverseCheck1">
                      Reverse checkbox
                    </label>
                  </div>
                  <div className="form-check form-check-reverse mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
               
                      id="reverseCheck2"
                      disabled
                    />
                    <label className="form-check-label" htmlFor="reverseCheck2">
                      Disabled reverse checkbox
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-reverse">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="switchCheckReverse"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="switchCheckReverse"
                    >
                      Reverse switch checkbox input
                    </label>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Switches</h5>
                </div>
                <div className="card-body">
                  <div className="form-check form-switch mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="switchCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="switchCheckDefault"
                    >
                      Default switch checkbox input
                    </label>
                  </div>
                  <div className="form-check form-switch mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="switchCheckChecked"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="switchCheckChecked"
                    >
                      Checked switch checkbox input
                    </label>
                  </div>
                  <div className="form-check form-switch mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="switchCheckDisabled"
                      disabled
                    />
                    <label
                      className="form-check-label"
                      htmlFor="switchCheckDisabled"
                    >
                      Disabled switch checkbox input
                    </label>
                  </div>
                  <div className="form-check form-switch mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="switchCheckCheckedDisabled"
                      defaultChecked
                      disabled
                    />
                    <label
                      className="form-check-label"
                      htmlFor="switchCheckCheckedDisabled"
                    >
                      Disabled checked switch checkbox input
                    </label>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* End Content */}
        {/* Start Footer */}
        <div className="footer d-sm-flex align-items-center justify-content-between bg-white py-2 px-4 border-top">
          <p className="text-dark mb-0">
            ©
            <Link to="#" className="link-primary">
              Kanakku
            </Link>
            , All Rights Reserved
          </p>
          <p className="text-dark">Version : 1.3.8</p>
        </div>
        {/* End Footer */}
      </div>
      {/* ========================
			End Page Content
		========================= */}
    </>
  );
};

export default FormCheckboxRadios;
