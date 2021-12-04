import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

const Button = () => {
  //   const contextType = useContext(LanguageContext);
  //   const text = contextType === "english" ? "Submit" : "Kirim";

  const renderSubmit = (
    { language } //props.language from LanguageContext
  ) => (language === "english" ? "Submit" : "Kirim");

  const renderButton = ({ color }) => {
    //props.color from ColorContext
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => renderSubmit({ language })}
        </LanguageContext.Consumer>
      </button>
    );
  };

  return (
    <ColorContext.Consumer>
      {(color) => renderButton(color)}
    </ColorContext.Consumer>
  );
};

export default Button;

/*
class Button extends React.Component {
    static contextType = LanguageContext;

    render() {
        const text = this.context === 'english' ? 'Submit' : 'Kirim'

        return <button className='ui button primary'>{text}</button>
    }
}
//          OR
Button.contextType = LanguageContext;

*/
