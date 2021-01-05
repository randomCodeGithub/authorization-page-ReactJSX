function FormImage(props) {
  return <img className={props.className} src={props.image.url} alt={props.image.alt} />;
}
