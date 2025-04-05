type TestimonialProps = {
    quote: string;
    author: string;
  }
  
  export default function Testimonial({ quote, author }: TestimonialProps) {
    return (
      <div className="bg-gray-50 p-6 rounded-lg">
        <blockquote className="italic text-gray-700">"{quote}"</blockquote>
        <div className="flex items-center mt-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
          <span className="font-medium">{author}</span>
        </div>
      </div>
    )
  }