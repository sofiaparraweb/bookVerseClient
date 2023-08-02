import style from "./Checkout.module.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { postPayment } from "../../Redux/actions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = ({total}) => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const Cart = useSelector((state) => state.LocalPersist.Cart);
    const user_id = useSelector(state => state.LocalPersist.userProfile.id);

    const { register, reset, handleSubmit, formState: { errors }} = useForm();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        name: "",
        lastName: "",
        user_mail: "",
        phone: "",
        amount:0,
    });

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUser({ ...user, [name]: value });
    };

    const customSubmit = async (user) => {
        setLoading(true);
        user.amount=total
           
        dispatch(postPayment(user_id)).then((response) => {
        if (response) {
            window.open(response.url, "_blank");
        } else {
            Swal.fire("Error", "Hubo un error al enviar la información", "error");
        }
        setLoading(false);
        reset();
        // navigate(0);
        });
    };
  

    return (
        <>
            <div className={style.contentPrincipalTienda}>
                <form onSubmit={handleSubmit(customSubmit)} className={style.formReactTienda}>
                    <div className={style.formControlTienda}>
                        <label className={style.labelesTienda}>Name</label>
                        <input
                            className={style.inputsTienda}
                            name="name"
                            placeholder="Enter your name"
                            onChange={handleInput}
                            type="text"
                            {...register("name", {
                                required: true,
                                maxLength: 30,
                            })}
                        />
                        {errors.name?.type === "required" && (
                            <p className={style.failTienda}>This field can not be empty</p>
                        )}
                        {errors.name?.type === "maxLength" && (
                            <p className={style.failTienda}>The maximum character limit is 30</p>
                        )}
                    </div>

                    <div className={style.formControlTienda}>
                        <label className={style.labelesTienda}>Last name</label>
                        <input
                            className={style.inputsTienda}
                            name="lastName"
                            placeholder="Enter your last name"
                            onChange={handleInput}
                            type="text"
                            {...register("lastName", {
                                required: true,
                                maxLength: 30,
                            })}
                        />
                        {errors.lastName?.type === "required" && (
                            <p className={style.failTienda}>This field can not be empty</p>
                        )}
                        {errors.lastName?.type === "maxLength" && (
                            <p className={style.failTienda}>The maximum character limit is 30.</p>
                        )}
                    </div>

                    <div className={style.formControlTienda}>
                        <label className={style.labelesTienda}>Email</label>
                        <input
                            className={style.inputsTienda}
                            name="user_mail"
                            placeholder="Enter your email"
                            onChange={handleInput}
                            type="text"
                            {...register("user_mail", {
                                pattern: /^([^\s@]+@(gmail\.com|hotmail\.com|yahoo\.com))$/i,
                                required: true,
                            })}
                            />
                        {errors.user_mail?.type === "pattern" && (
                            <p className={style.failTienda}>Please enter a valid email address.</p>
                        )}
                        {errors.user_mail?.type === "required" && (
                            <p className={style.failTienda}>Email is required.</p>
                        )}
                    </div>

                    <div className={style.formControlTienda}>
                        <label className={style.labelesTienda}>
                            Phone (area cod. + number)
                        </label>
                        <input
                            className={`${style.inputsTienda} ${
                                errors.phone ? style.error : style.success
                              }`}
                            name="phone"
                            placeholder="11 12345678"
                            onChange={handleInput}
                            type="number" 
                            {...register("telefono", {
                                required: {
                                    value:
                                    /^\+(?:[0-9]?){1,3}[-. (]*(?:[0-9]{1,})[-. )]*(?:[0-9]{1,})[-. ]*(?:[0-9]{1,})$/,
                                    message:
                                    "Please enter a valid phone number (example: +54 9 11 12345678)",
                                },
                            })}
                        />
                        {errors.phone && (
                            <p className={style.failTienda}>{errors.phone.message}</p>
                        )}
                        {errors.phone?.type === "maxLength" && (
                            <p className={style.failTienda}> Please enter a valid contact.</p>
                        )}
                    </div>
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <button className="Buttons" type="submit" disabled={loading} style={{padding:"1rem"}}>
                            {" "}
                            {loading ? "Sending..." : "Send"}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};


export default Checkout;
