import { Detail, Sidebar } from "@/components";
import { getContacts } from "@/services/contacts";
import { Outlet, useLoaderData } from "react-router-dom";

export default function RootLayout() {
  const { contacts } = useLoaderData() as { contacts: ContactType[] };
  return (
    <>
      <Sidebar contacts={contacts} />
      <Detail>
        <Outlet />
      </Detail>
    </>
  );
}

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}
