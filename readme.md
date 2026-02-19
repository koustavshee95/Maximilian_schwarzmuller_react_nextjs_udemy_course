1) Install react-router-dom
2) Import createBrowserRouter from react-router-dom.
3) Now inside createBrowserRouter has two element one is path and second one element.
4) path hold the path name and element hold the which component I want to show respect to path.
5) Now import RouterProvider from react-router-dom.
6) Now hold the createBrowserRouter to a variable.
6) Inside app component return RouterProvider and give as an value router= whatever value you have hold.

We can do another approach also :

1) CreateRoutesFromElements from react-router-dom.
2) use CreateRoutesFromElements function and hold this functon in a variable.
3) Inside createRoutesFromElements func has Route inside Route we have to give path and element.
4) this variable we have to pass through createBrowserRouter.

We use link instead of anker tag from react-router-dom because link does not send the http request again and again while chick the respected link.