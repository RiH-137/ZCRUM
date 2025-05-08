import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

export const checkUser = async () => {
  const user = await currentUser();

  // if user is not logged in, return null
  if (!user) {
    return null;
  }


  try {

    // check if user already exists in the database
    // if user exists, return the user
    const loggedInUser = await db?.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    // if user exists, return the user
    if (loggedInUser) {
      return loggedInUser;
    }

    const name = `${user.firstName} ${user.lastName}`;

    // if user does not exist, create a new user in the database
    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
      },
    });

    // return the new user
    return newUser;
  } catch (error) {
    console.log(error);
  }
};