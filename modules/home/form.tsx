/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEasyGoogleForm } from '@hymns-of-web/use-easy-google-form';
import { useRef } from 'react';

export default function MyCustomGForm() {
  const ref = useRef(null);
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
  });
  return (
    <form onSubmit={onSubmit} ref={ref}>
      <label htmlFor="bP_Lc">Name</label>
      <input type="text" id="bP_Lc" />
      <label htmlFor="zQqCD">adult</label>
      <input type="text" id="zQqCD" />
      <label htmlFor="zQvCD">children</label>
      <input type="text" id="zQvCD" />
      <button type="submit">Submit</button>
    </form>
  );
}
