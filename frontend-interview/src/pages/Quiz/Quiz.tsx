export const Quiz = () => {
  return (
    <section>
      <h3 className="text-4xl">Why do we need to use Javascript module loader?</h3>
      <p className='text-base tracking-widest font-bold'>Usually, JS files are loaded in order via script tag in HTML templates, but files and code gets complicated once an application becomes large. Javascript module loaders lets us separate our code into modules and include a specific module in another module. This lets us import what module is required and load only the necessary. Better Javascript file size load and better code compartmentalization, means, JS module loader mitigates away the danger of global-namespace issue.</p>
    </section>
  )
}