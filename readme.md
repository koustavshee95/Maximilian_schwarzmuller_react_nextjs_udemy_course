How to use form state.

1)Create handling function.
2)Use formdata.get method to hold the value with the name value form. Mean we are extracting the form data which user are entered and hold it with a variable.
3)Create one empty error array.
4)Use condition to handle the array
5)Now if the error length is more then 0 then handle it with an object.
6)If no error then return error : null.
7)To showing the error and handle to form properly use hooks useActionState.
8)This is the syntax of action state hooks :

const [state, action, isPending] = useActionState(
actionFunction,
initialState
);

9)initial state: {
errors: null
}

9)Now use in action function parameter pereviousState as a first parameter. You must accept It. : (prevState, formData) => newState
10)use inside form action = {action} which is coming from hooks
11)Now use error inside jsx with the map function.
12)use defaultValue inside form.
