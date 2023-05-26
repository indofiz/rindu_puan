interface TemplatePengajuanContent {
  children: JSX.Element
}
const Template: React.FC<TemplatePengajuanContent> = (props) => {
  return <section className='px-6 mb-8'>{props.children}</section>
}

export default Template
