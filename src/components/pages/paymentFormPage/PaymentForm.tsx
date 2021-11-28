import React, { ChangeEvent, useCallback, useState } from "react";
import Input from "../../../ui/molecules/Input/Input";
import { InputMasks } from "../../../ui/molecules/Input/InputMask";
import { INTL } from "../../../utils/intl";
import { cardholderValidator, cvcValidator, expireValidator, isValid, panValidator } from "../../../utils/validators";
import cl from "./PaymentForm.module.scss";

type TCard = {
    pan: string;
    expire: string;
    cardholder: string;
    cvc: string
}
type TCardError = {
    pan: boolean;
    expire: boolean;
    cardholder: boolean;
    cvc: boolean
}
const PaymentForm = () => {
  const [card, setCard] = useState<TCard>({pan: '', expire: '', cardholder: '', cvc: ''});
  const [errors, setErrors] = useState<TCardError>({pan: false, expire: false, cardholder: false, cvc: false});
  const validate = useCallback((data: TCard) => {
      const errors: TCardError = {
        pan: panValidator(data.pan),
        expire: expireValidator(data.expire),
        cardholder: cardholderValidator(data.cardholder),
        cvc: cvcValidator(data.cvc)
      };
      setErrors(errors);
      return isValid(errors)
  }, []);
  const handleCardDataChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setCard((card) => ({...card, [name]: value}));
    setErrors((errors) => ({...errors, [name]: false}))
  }, []);

  const handleButtonClick = useCallback(() => {
    if (!validate(card)) return;
}, [validate, card]);
  return (
    <div className={cl.container}>
      <h1 className={cl.title}> {INTL.PAYMENT_FORM.TITLE}</h1>
      <InputMasks error={errors.pan} name = {'pan'} onChange={handleCardDataChange} mask={'9999 9999 9999 9999 999'} className={cl.card_input} title={INTL.PAYMENT_FORM.CARD_NAME} />
      <div className={cl.short_input_container}>
      <InputMasks error={errors.expire} name = {'expire'} onChange={handleCardDataChange} mask={'99/99'} className={cl.date_input} title={INTL.PAYMENT_FORM.DATE} />
      <Input error={errors.cvc} name = {'cvc'} onChange={handleCardDataChange} className={cl.code_input} type="password" title={INTL.PAYMENT_FORM.CODE} />
      </div>
      <Input error={errors.cardholder} name = {'cardholder'} onChange={handleCardDataChange} className={cl.owner_input} title={INTL.PAYMENT_FORM.OWNER} />
      <button onClick={handleButtonClick} className={cl.pay_button}>{INTL.PAYMENT_FORM.PAY_BUTTON}</button>
    </div>
  );
};

export default PaymentForm;
