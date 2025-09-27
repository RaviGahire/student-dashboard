import React from "react";

export class Announcement extends React.Component {
  constructor(props) {
    super(props);

    // state with announcements and starting index
    this.state = {
      announcements: {
        one: { text: "📢 Exam schedule will be released on Monday." },
        two: { text: "📚 Library will remain open till 9 PM this week." },
        three: { text: "🎉 Annual cultural fest starts from October 15." },
        four: { text: "📝 Assignment submission deadline is October 5." },
        five: { text: "💻 New computer lab timings: 8 AM - 6 PM." }
      },
      currentIndex: 0 // start with first announcement
    };
  }

  // method for showing next announcement
  nextAnnouncement = () => {
    // turn object into array
    const list = Object.values(this.state.announcements);

    // update index, loop back to 0 if at end
    this.setState({
      currentIndex: (this.state.currentIndex + 1) % list.length
    });
  };



  render() {
    // make array from object
    const list = Object.values(this.state.announcements);
//  let interval =  this.Interval =  setInterval( this.nextAnnouncement() , 5000)
    // get the announcement at current index
    const current = list[this.state.currentIndex];
 
    return (
      <div className="px-4 flex items-center flex-col md:flex-row justify-between gap-2.5 max-w-[1500px] mx-auto h-auto md:h-15 bg-amber-200 rounded ">

        <h2 className="text-xl font-bold ">Announcements 📢</h2>
        <p className="text-lg text-red-500 font-semibold ">{current.text}</p>

        <button
          onClick={this.nextAnnouncement}
          className=" px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
        >
          Next
        </button>
      </div>
    );
  }
}


