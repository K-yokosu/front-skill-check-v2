import LocationInput from "@/features/top/location/comoponents/LocationInput/LocationInput";

type SearchParams = Promise<{ [key: string]: string | undefined }>;

export default async function Page(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const q = searchParams.q ?? "";

  return (
    <>
      <LocationInput q={q} />
    </>
  );
}
