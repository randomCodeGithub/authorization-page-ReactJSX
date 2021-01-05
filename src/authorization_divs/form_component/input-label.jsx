function InputLabel(props) {
  return (
    <div className="row">
      <div className="col-50">
        <label id="loginLabelEmail">
          {props.label.name}
          <span className="text-red">*</span>
        </label>
      </div>
      <div className="col-50">
        <FormImage
          image={{ url: props.label.imgUrl, alt: props.label.imgAlt }}
        />
      </div>
    </div>
  );
}
