"use client";

import { Card } from "flowbite-react";

export default function DefaultCard(props) {
  const { title, body } = props;
  return (
    <Card className="max-w-sm" href="#">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <div className="font-normal text-gray-700 dark:text-gray-400">{body}</div>
    </Card>
  );
}
