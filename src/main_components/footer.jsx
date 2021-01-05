class Footer extends React.Component {
  constructor() {
    super();

    this.state = {
      siteName: 'Login page',
    };
  }
  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer>
        <p>All Rights reserved "{this.state.siteName}" {currentYear}</p>
      </footer>
    );
  }
}
