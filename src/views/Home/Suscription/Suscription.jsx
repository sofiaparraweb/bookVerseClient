import React from "react";
import style from "./Suscription.module.css";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import { formSuscription } from "../../../Redux/actions";

const Suscription = () => {

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
      const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm();
      const dispatch = useDispatch();
    
      const onSubmit = (data) => {
        dispatch(formSuscription(data));
        reset();
        Swal.fire({
          icon: 'success',
          title: 'Your email has been sent!',
          text: 'Thank you! We will comunicate soon!',
          background: '#f3f3f3',
          confirmButtonColor: '#B9362C',
          customClass: {
            title: 'my-custom-title',
            content: 'my-custom-content',
            confirmButton: 'my-custom-button',
          },
        });    
      };

      return (
        <>
          <div className={style.infoCon}>
            <div className={style.innerContainer}>
            <h1 className={style.sectionTitle}>
     WHERE WORDS {" "}
      <span className={style.customFont}>FLY TO YOUR HANDS</span>
    </h1>
              <div className={style.border}></div>
              <div className={style.serviceContainer}>
                <div className={style.infobox}>
                  <div className={style.infoicon}>
                  </div>
                  <div className={style.infoTitle}>EASY ACCESS</div>
                  <div className={style.description}>
                   Find your book and start it within minutes
                  </div>
                </div>
    
                <div className={style.infobox}>
                  <div className={style.infoicon}>
                  </div>
                  <div className={style.infoTitle}>COMMUNITY</div>
                  <div className={style.description}>
                   Be part of our readers community!
                  </div>
                </div>
    
                <div className={style.infobox}>
                  <div className={style.infoicon}>
                    <i className="fa fa-hospital-user"></i>
                  </div>
                  <div className={style.infoTitle}>FIRST TO KNOW</div>
                  <div className={style.description}>
                   Join the newsteller and find out what's comming before everyone!
                  </div>
                </div>

 <form className={style.footerSection} onSubmit={handleSubmit(onSubmit)}>
<h3 className={style.suscriptiontitle}>BE PART OF THE BOOKVERSE CLUB</h3>
<input
  className={style.suscriptioninput}
  type="text"
  name="email"
  placeholder="Leave your email and join us!"
  {...register("email", {
    pattern: /^[^\s@]+@gmail\.com$/i,
    required: true,
  })}
/>
{errors.email && (
  <p className={style.suscriptionfail}>Type a valid email</p>
)}
<button className={style.btnSuscripcion} type="submit">
  SUSCRIBIRSE
</button>
</form>
              </div>
            </div>
          </div>
        </>
      );
    };
    

export default Suscription;

