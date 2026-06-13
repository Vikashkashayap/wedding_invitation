const placeholderPhoto = (name) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=6B1B2B&color=D4AF37&size=200&bold=true&font-size=0.4`

export const familyMembers = {
  groom: {
    title: "Groom's Family",
    parents: [
      {
        id: 'g-p1',
        name: 'Ramdatta Gupta',
        relation: 'Father of the Groom',
        photo: placeholderPhoto('Ramdatta Gupta'),
      },
      {
        id: 'g-p2',
        name: 'Nirmala Devi',
        relation: 'Mother of the Groom',
        photo: placeholderPhoto('Nirmala Devi'),
      },
    ],
    members: [
      { id: 'g1', name: 'Sonu Gupta', relation: 'Brother', photo: placeholderPhoto('Sonu Gupta') },
      { id: 'g2', name: 'Brij Mohan Gupta (Monu)', relation: 'Brother', photo: placeholderPhoto('Brij Mohan') },
      { id: 'g3', name: 'Abhishek Gupta', relation: 'Brother', photo: placeholderPhoto('Abhishek Gupta') },
      { id: 'g4', name: 'Manmohan Gupta', relation: 'Brother', photo: placeholderPhoto('Manmohan Gupta') },
      { id: 'g5', name: 'Abhinash Gupta', relation: 'Brother', photo: placeholderPhoto('Abhinash Gupta') },
      { id: 'g6', name: 'Vikas Gupta', relation: 'Brother', photo: placeholderPhoto('Vikas Gupta') },
      { id: 'g7', name: 'Anurag Gupta', relation: 'Brother', photo: placeholderPhoto('Anurag Gupta') },
      { id: 'g8', name: 'Aviral Gupta', relation: 'Brother', photo: placeholderPhoto('Aviral Gupta') },
      { id: 'g9', name: 'Ansh Gupta', relation: 'Brother', photo: placeholderPhoto('Ansh Gupta') },
      { id: 'g10', name: 'Avneet Gupta', relation: 'Brother', photo: placeholderPhoto('Avneet Gupta') },
    ],
  },
  bride: {
    title: "Bride's Family",
    parents: [
      {
        id: 'b-p1',
        name: 'Harilal Gupta',
        relation: 'Father of the Bride',
        photo: placeholderPhoto('Harilal Gupta'),
      },
      {
        id: 'b-p2',
        name: 'Munni Devi',
        relation: 'Mother of the Bride',
        photo: placeholderPhoto('Munni Devi'),
      },
    ],
    members: [
      { id: 'b1', name: 'Satyam Gupta', relation: 'Brother', photo: placeholderPhoto('Satyam Gupta') },
    ],
  },
}
