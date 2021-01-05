// Компонент Wrapper, содержащий "вызовы" компонентов Header и List.
class Wrapper extends React.Component {
    render() {
      return <div className="wrapper">
        <ImgBg />
        <Container />
        <Footer />
      </div>
    }
  }