// import { auth } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";
// import { getOrganization } from "@/actions/organizations";
// import OrgSwitcher from "@/components/org-switcher";
// import ProjectList from "./_components/project-list";
// import UserIssues from "./_components/user-issues";

// export default async function OrganizationPage({ params }) {
//   const { orgId } = params;

//   const { userId } = await auth();

//   if (!userId) {
//     redirect("/sign-in");
//   }

//   const organization = await getOrganization(orgId);

//   if (!organization) {
//     return (
//       <div className="container mx-auto py-10 text-center">
//         <h1 className="text-3xl font-semibold">Organization not found</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto py-10">
//       <div className="mb-4 flex flex-col sm:flex-row justify-between items-start">
//         <h1 className="text-5xl font-bold gradient-title">{organization.name}</h1>
//         <OrgSwitcher />
//       </div>

//       <div className="mb-4">
//         <ProjectList orgId={orgId} />
//       </div>

//       <div className="mt-4">
//         <UserIssues userId={userId} />
//       </div>
//     </div>
//   );
// }

"use client";
import React from 'react';


const Organization = async ({ params }) => {
    const { orgId } = await params;
  return (
    <div>{orgId}</div>
  )
}

export default Organization;