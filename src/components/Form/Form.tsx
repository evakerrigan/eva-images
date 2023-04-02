import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Form.scss';
import { SalePhotoCard } from '../SalePhotoCard/SalePhotoCard';
import { Modal } from '../Modal/Modal';

export type typePropsElseBimbo = {
  [key: string]: never;
};

interface myState {
  saleList: myCard[];
  modal: boolean;
}

interface myCard {
  photo: string;
  title: string;
  select: string;
  date: string;
  style: string;
  agree?: boolean;
}

export function Form() {
  const [ stateForm, setStateForm ] = useState({ saleList: [], modal: false });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data: myCard) => {
    alert(JSON.stringify(data));
    console.log(data);
    console.log(errors);
    reset();

    const photo = data.inputFile as HTMLInputElement;
    const title = (data.inputTitle as HTMLInputElement).value;
    const select = (data.inputSelect as HTMLSelectElement).value;
    const date = (data.inputDate as HTMLInputElement).value;
    const style = data.inputStyle as HTMLInputElement;

    const card = {
      photo: URL.createObjectURL(((photo as HTMLInputElement).files as FileList)[0]),
      title: title,
      select: select,
      date: date,
      style: style ? style : '',
    };
    setStateForm({ saleList: [...stateForm.saleList, card] });
    setStateForm({ modal: true });
    setTimeout(() => {
      setStateForm({ modal: false });
    }, 5000);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="input-form">
        <fieldset className="input-fieldset">
          <legend className="input-legend-title">Form for your:</legend>
          <input
            type="file"
            {...register('inputFile', { required: true })}
            accept="image/png, image/jpeg"
            className="input input-image file"
          />
          <div>{errors?.inputFile && <p className="input-error">Нет картинки</p>}</div>
          <input
            type="text"
            {...register('inputTitle', { required: true })}
            className="input input-text title"
          />
          <div>
            {errors?.inputTitle && (
              <p className="input-error">
                Название фото должно содержать хотя бы 1 букву и должно начинаться с заглавной
              </p>
            )}
          </div>
          <select
            {...register('inputSelect', { required: true })}
            className="input input-select stock"
          >
            <option value="" selected disabled>
              Select Stock
            </option>
            <option value="adobe">Adobe</option>
            <option value="getty">Getty</option>
            <option value="offset">Offset</option>
          </select>
          <div>{errors?.inputSelect && <p className="input-error">Не выбран фотосток</p>}</div>
          <input
            type="date"
            {...register('inputDate', { required: true })}
            className="input input-date date"
          />
          <div>{errors?.inputDate && <p className="input-error">Нет даты съемки</p>}</div>
          <div>
            <legend className="input-legend">Choose the style of your photo:</legend>
            <div className="input-wrapper">
              <input
                type="radio"
                {...register('inputStyle', { required: true })}
                id="one"
                name="style"
                value="lifestyle"
                className="input input-radio choice"
              />
              <label htmlFor="one">Lifestyle</label>
            </div>
            <div className="input-wrapper">
              <input
                type="radio"
                {...register('inputStyle', { required: true })}
                id="two"
                name="style"
                value="studio"
                className="input input-radio choice"
              />
              <label htmlFor="two">Studio style</label>
            </div>
          </div>
          <div>
            {errors?.inputStyle && <p className="input-error">Не выбран стиль фотографии</p>}
          </div>
          <div>
            <legend className="input-legend">
              I agree to send my beautiful authors photo for sale and give all rights to it to Eva
              Images:
            </legend>
            <div className="input-wrapper">
              <input
                type="checkbox"
                {...register('inputAgree', { required: true })}
                id="2"
                className="input input-checkbox agree"
              />
              <label htmlFor="agree">I agree</label>
            </div>
          </div>
          <div>
            {errors?.inputAgree && <p className="input-error">Не дано согласие на продажу фото</p>}
          </div>

          <div className="input-button-wrapper">
            <input type="submit" className="form-button" />
          </div>
        </fieldset>
      </form>
      <div className="output">
        {stateForm.saleList.map((item: myCard, i: number) => (
          <SalePhotoCard key={i} item={item} />
        ))}
      </div>
      {stateForm.modal === true ? <Modal /> : null}
    </div>
  );
}
