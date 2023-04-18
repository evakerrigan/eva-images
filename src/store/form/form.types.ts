export interface FormCard {
  photo: string;
  title: string;
  select: string;
  date: string;
  style: string;
}

export interface FormState {
  formState: {
    forms: FormCard[];
  };
}
