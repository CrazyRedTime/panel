import { ReactSVG } from "react-svg";
import { useForm } from "react-hook-form";
import cn from 'classnames';
import styles from "./Login.module.scss";
import { logIn } from "../../redux/login/actions";
import { useDispatch, useSelector } from "react-redux";
import { getLoginError, getLoginInProgress } from "../../redux/login/selectors";
import Preloader from "../Preloader/Preloader";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    reValidateMode: "all",
    criteriaMode: "all",
  });

  const dispatch = useDispatch();

  const submit = (data) => {
    dispatch(logIn(data.login, data.password));
  };

  const loginInProgress = useSelector(getLoginInProgress);

  const loginError = useSelector(getLoginError);

  return (
    <div className={styles.loginPageContainer}>
      {loginInProgress && <Preloader />}
      <div className={styles.titleContainer}>
        <ReactSVG
          className={styles.logoContainer}
          src={process.env.PUBLIC_URL + "/images/logo.svg"}
        />
        <span className={styles.title}>Need for drive</span>
      </div>
      <div className={styles.loginForm}>
        <div className={styles.loginTitleContainer}>
          <span className={styles.loginTitle}>Вход</span>
          {loginError && <span className={styles.loginError}>Неверный логин или пароль</span>}
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <div className={styles.inputContainer}>
            <label htmlFor="login">Логин</label>
            <input className={cn({[styles.error]: errors.login})} id="login" {...register("login", { required: true })} />
            {errors.login && <p>Это поле обязательно</p>}
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="password">Пароль</label>
            <input
              className={cn({[styles.error]: errors.password})}
              id="password"
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && <p>Это поле обязательно</p>}
          </div>
          <div className={styles.buttonsContainer}>
            <a href="#0">Запросить доступ</a>
            <button disabled={!isValid}>Войти</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;