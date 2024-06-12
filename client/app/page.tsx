"use client";

import React, { FC, useState } from "react";
import Heading from "./utils/Heading";

interface Props {}

const Page: FC<Props> = (props) => {
  return (
    <>
      <Heading
        title="Ágora"
        description="Ágora is a platform for students to learn and get help from teachers"
        keywords="Programming, MERN, Courses, Machine Learning, "
      />
    </>
  );
};

export default Page;
