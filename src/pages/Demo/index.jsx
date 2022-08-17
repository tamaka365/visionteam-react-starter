import { useCallback, useRef } from "react";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  add,
  changeTo,
} from "src/store/slices/counterSlice";

import { Button } from "src/components/basic/index";
import { Count } from "src/components/index";
import { Input } from "src/components/antd-custom/index";

import classes from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(classes);

export default function Demo() {
  const inputElementRef = useRef(null);

  const dispatch = useDispatch();

  const handleIncrement = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  const handleDecrement = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);

  const handleReset = useCallback(() => {
    dispatch(reset());
  }, [dispatch]);

  const handleAdd = useCallback(() => {
    const addSttep = inputElementRef.current.input.value || 0;
    dispatch(add(+addSttep));
  }, [dispatch]);

  const handleChangeTo = useCallback(() => {
    dispatch(changeTo({ count: 520 }));
  }, [dispatch]);

  return (
    <div className={cx("home")}>
      <h1>Visionteam React Starter</h1>
      <h2>Home</h2>
      <div>
        <Link to="/playground">Playground</Link>
      </div>
      <Count />
      <div>
        <Button onClick={handleIncrement}>Increment</Button>
        <Button onClick={handleDecrement}>Decrement</Button>
        <Input ref={inputElementRef} type="number" defaultValue={7} />
        <Button onClick={handleAdd}>Add</Button>
        <Button onClick={handleChangeTo}>ChangeTo(520)</Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>
    </div>
  );
}
