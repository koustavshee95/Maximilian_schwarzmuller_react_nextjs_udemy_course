import {useFormStatus} from 'react-dom';
import { useActionState, use,  } from "react";
import { OpinionsContext } from "../store/opinions-context";
import { Submit } from './Submit';

export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext);

  const handlingOpinionForm = async (prevState, formData) => {
    const userName = formData.get("userName");
    const title = formData.get("title");
    const body = formData.get("body");

    let errors = [];

    if (!userName.trim()) {
      errors.push("Please enter your name.");
    }

    if (title.trim().length < 5) {
      errors.push("Title must be 5 character long.");
    }

    if (body.trim().length < 10 || body.trim().length > 300) {
      errors.push("Your Opinion must be between 10 and 300 characters long.");
    }
    if (errors.length > 0) {
      return {
        errors,
        enteredValue: {
          userName,
          title,
          body,
        },
      };
    }
    await addOpinion({ userName, title, body });
    return { errors: null }; // if no error clear the form.
  };

  const [formState, formAction, pending] = useActionState(handlingOpinionForm, {
    errors: null,
  });

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={formState.enteredValue?.userName}
            />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={formState.enteredValue?.title}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={formState.enteredValue?.body}
          ></textarea>
        </p>

        {formState.errors && (
          <ul className="errors">
            {formState.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}

        <Submit/>
      </form>
    </div>
  );
};

//if we want to create one features user can submit once only. to implement this we can use useActionState hooks pending to false.Therefore we can use this information to update this ui.

//otherwise we have another hooks useFormStatus from reactDom.This hooks we cants be used the component that used form and form action, But we must be used some nested component.some component that we have used inside of the form.
