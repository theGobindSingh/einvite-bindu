/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEasyGoogleForm } from '@hymns-of-web/use-easy-google-form';
import {
  Form,
  FormButton,
  FormLowerContainer,
  FormUpperContainer,
} from '@modules/home/styles';
import { useRef } from 'react';

export default function MyCustomGForm() {
  const ref = useRef<HTMLFormElement>(null);

  const onSubmitExtra = () => {
    ref.current?.reset();
  };

  const onSubmit = useEasyGoogleForm({
    formRef: ref,
    gFormId: '1rIfXQTvwg7mkLcwFg-vVy48aCtN60PSVTD2lrHSZVQ8',
    links: [
      {
        entryId: 'entry.1226930264',
        formId: 'bP_Lc',
        type: 'text',
      },
      {
        entryId: 'entry.52813064',
        formId: 'zQqCD',
        type: 'text',
      },
      {
        entryId: 'entry.812063445',
        formId: 'zQvCD',
        type: 'text',
      },
    ],
    onSubmitExtra,
  });
  return (
    <Form onSubmit={onSubmit} ref={ref}>
      <FormUpperContainer>
        <label htmlFor="bP_Lc">Name</label>
        <input type="text" id="bP_Lc" className="input" required />
      </FormUpperContainer>
      <FormLowerContainer>
        <label htmlFor="zQqCD" className="label adult">
          Adults
        </label>
        <input
          type="number"
          id="zQqCD"
          className="input adult"
          min={1}
          defaultValue={1}
          step={1}
          required
        />
        <label htmlFor="zQvCD" className="label child">
          Children
        </label>
        <input
          type="number"
          id="zQvCD"
          className="input child"
          min={0}
          defaultValue={0}
          step={1}
          required
        />
      </FormLowerContainer>
      <FormButton type="submit">Submit</FormButton>
    </Form>
  );
}
