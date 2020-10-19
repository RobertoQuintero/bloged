const { default: MainMenu } = require("../Navigation/MainMenu")

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="https://ed.team/static/images/logo/logo.svg" alt="EDlogo"/>
      </div>
      <MainMenu/>
    </header>
  )
}

export default Header
