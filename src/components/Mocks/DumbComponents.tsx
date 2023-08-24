import { FC } from "react";

type FooProps = {};
const Foo: FC<FooProps> = () => {
  return <h1>Foo</h1>;
};

type BarProps = {};
const Bar: FC<BarProps> = () => {
  return <h1>Bar</h1>;
};

type BazProps = {};
const Baz: FC<BazProps> = () => {
  return <h1>Baz</h1>;
};

export { Bar, Baz, Foo };
