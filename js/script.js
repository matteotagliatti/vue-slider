const app = new Vue({
  el: "#app",
  data: {
    activeElement: 0,
    items: [
      {
        title: "Svezia",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
        img: "img/1.jpg",
      },
      {
        title: "Svizzera",
        text: "Lorem ipsum.",
        img: "img/2.jpg",
      },
      {
        title: "Gran Bretagna",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        img: "img/3.jpg",
      },
      {
        title: "Germania",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.",
        img: "img/4.jpg",
      },
      {
        title: "Paradise",
        text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.",
        img: "img/5.jpg",
      },
    ],
  },

  methods: {
    next() {
      this.activeElement++;
      if (this.activeElement === 5) this.activeElement = 0;
    },

    prev() {
      this.activeElement--;
      if (this.activeElement === -1) this.activeElement = 4;
    },
  },
});
