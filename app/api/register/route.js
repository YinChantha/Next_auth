import { NextResponse } from "next/server";
import * as bcrypt from "bcrypt";
import prisma from "@/helpers/prisma";

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json(
        { message: "Both fields are required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.create({
      data: {
        email: email.toLowerCase(),
        password: await bcrypt.hash(password, 10),
      },
    });

    const { password: hashedPasswrod, ...result } = user;

    return NextResponse.json({ result }, { status: 201 });
  } catch (e) {
    console.error(e);
    console.log("Why Error!!!");
    return NextResponse.json(
      { message: "Something went wrong while trying to register", result: e },
      { status: 500 }
    );
  }
}
