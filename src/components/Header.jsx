export default function Header({ pageTitle, headerClass }) {
  return(
    <header className={headerClass}>
        <h1 className="text-center font-semibold text-xl">{pageTitle}</h1>
    </header>
  ) 
  ;
}
