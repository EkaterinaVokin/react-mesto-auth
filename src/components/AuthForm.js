
export function  AuthForm(props) {

  const {title,name,buttonText,onSubmit,footer} = props;


  return (
    <section className={`auth auth_type_${name}`}>
      <div className="auth__container">
      <h1 className="auth__title">{title}</h1>
      <form className={`auth__form auth__form_type_${name}`} action="#" name={`auth-${name}`} noValidate onSubmit={onSubmit}>
      <div className="auth__block">
        <input
          className='auth__input auth__input_type_email'
          type="email"
          name="email"
          placeholder="Email"
          minLength="4"
          maxLength="40"
          required
        />
        <span className='auth__error'></span>
      </div>
      <div className="auth__block">
        <input
          className='auth__input auth__input_type_password'
          type="password"
          name="password"
          placeholder="Пароль"
          minLength="8"
          maxLength="40"
          required
        />
        <span className='auth__error'></span>
      </div>
      <button className="auth__button" type="submit">{buttonText}</button>      
      {
        footer && <div className="auth__footer">
          {footer}
        </div>
      }
      </form>
      </div>
    </section>
  )
}