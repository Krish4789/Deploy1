import './Bottom.css';

function Bottom() {
  return (
    <form id='WebsitePage' action='/' method='post'>
      <div className='head'>
        <h1>SIGN UP FOR OUR DAILY INSIDER</h1>
        <input type='email' placeholder='Enter your Email here' />
        <button>Subscribe</button>
      </div>
    </form>
  );
}
export default Bottom;
