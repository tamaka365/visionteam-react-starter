const request = (...args) => fetch(...args).then((res) => res.json());

export default request;
