// "How to update a deeply nested object in state?" — Answer: create a new object (immutable update), or use useReducer for complex updates.

const [state, setState] = useState({ user: { profile: { name: "A" } } });

setState((prev) => ({
  ...prev,
  user: {
    ...prev.user,
    profile: {
      ...prev.user.profile,
      name: "B",
    },
  },
}));

// user;
// profile;
// name = "f";

setState((prev) => ({
  ...prev,
  user: {
    ...prev.user,
    profile: {
      ...prev.user.profile,
      name: "g",
    },
  },
}));
// ---------------------------------------------------------------------------------
// useState - multiple separate calls
setState((prev) => ({ ...prev, user: { ...prev.user, name: "Jane" } }));
setState((prev) => ({ ...prev, user: { ...prev.user, age: 25 } }));

// useReducer - can batch updates more naturally
updateUser((prev) => ({
  ...prev,
  name: "Jane",
  age: 25,
}));

// ------------------------------------------------------------------------------
// useState - These get batched automatically
// useState - separate state pieces
const [name, setName] = useState("John");
const [age, setAge] = useState(30);
const [theme, setTheme] = useState("light");

// Multiple setter calls (but still batched by React)
setName("Jane");
setAge(25);
setTheme("dark");

// useReducer - single state object
const [state, dispatch] = useReducer(reducer, initialState);

// Single dispatch with multiple changes
dispatch({
  name: "Jane",
  age: 25,
  theme: "dark",
});
