import ProfileCard from "./components/ProfileCard"
function App() {
  return(
    <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginTop: '50px'}}>
      <h1>My Team Portfolio</h1>
      <ProfileCard 
        name="Phavarisa Pitavaratorn" 
        role="Student @ CEDT"
        bio="not cool"
      />
      <ProfileCard 
        name="John Doe" 
        role="Guest Developer"
        bio="I love codeing and learning new things."
        />
    </div>
  );
}

export default App
