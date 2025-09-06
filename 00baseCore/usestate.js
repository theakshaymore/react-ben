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
