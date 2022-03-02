function ListHeading() {
  return (
    <div className="hidden lgphone:flex gap-4 items-center text-gray-500 bg-[#E4E4E4] rounded-sm mt-5 h-11 px-2 font-sourcesans">
      {/* <p className="basis-14">ID</p> */}
      <p className="basis-24">PRIORITY</p>
      <p className="grow">ISSUE</p>
      <p className="hidden tablet:block basis-40 text-center">DATE</p>
      {/* <div className="hidden tablet:flex basis-36 justify-center">
        <p>STATUS</p>
      </div> */}
      <p>ASSIGNED TO</p>
    </div>
  );
}

export default ListHeading;
