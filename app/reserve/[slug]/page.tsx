import Header from './components/Header';
import Form from './components/Form';

export default function Reserve() {
  return (
    <div className="h-screen border-t">
      <div className="m-auto w-3/5 py-9">
        <Header />
        <Form />
      </div>
    </div>
  );
}
