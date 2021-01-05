function FormHeader(props) {
  return (
    <div className="row">
      <div className="col-50 text-left header-const">
        <h2>{props.header.title}</h2>
      </div>
      <div className="col-50 text-right">
        <FormImage
          className="logo"
          image={{ url: props.header.imgUrl, alt: props.header.imgAlt }}
        />
      </div>
    </div>
  );
}
