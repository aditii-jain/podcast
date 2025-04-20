import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { SelfHostedVideo } from "@/components/self-hosted-video"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#2c1810]">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.png"
            alt="The three hosts of Yap Sesh recording a podcast"
            fill
            className="object-cover brightness-90"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">yap sesh.</h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto mb-8">
            Three friends discussing ethics in tech and beyond
          </p>
          <Link
            href="#episodes"
            className="inline-flex items-center justify-center rounded-full bg-[#8B4513] px-6 py-3 text-lg font-medium text-white hover:bg-opacity-90 transition-colors"
          >
            Listen Now
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <Link href="#about">
            <ArrowDown className="h-10 w-10 text-white" />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#3c2415]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#DEB887]">Who are we?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <HostCard
              name="Emily Sun"
              image="/images/emily.png"
              bio="Hi! My name is Emily Sun and I'm a sophomore at USC majoring in Business Administration, with minors in Forensics and Criminality as well as Culture, Media, and Entertainment. Fashion has been a lifelong passion of mine, and my business studies give me a strong understanding of how the industry works behind the scenes. Since joining ShiftSC, I've become curious by how technology and AI are changing everything from design to marketing in fashion."
            />
            <HostCard
              name="Aditi Jain"
              image="/images/aditi.jpeg"
              bio="Hi! My name is Aditi Jain and I'm a sophomore at USC majoring in Computer Science. I've always been drawn to building things from scratch, and over time that curiosity turned into a passion for startups. Whether it's through prototyping an app or helping nonprofits through tech at Code the Change, I love the fast-paced, problem-solving mindset that startups require. Since joining ShiftSC, I've been especially interested in how AI and emerging technologies can streamline high-friction workflows across industries like healthcare, compliance, and education."
            />
            <HostCard
              name="Annie"
              image="/images/annie.jpeg"
              bio="Environmental scientist and avid golfer. Annie explores the intersection of recreational spaces and environmental impact, with a particular focus on sustainable practices in golf course management and how technology can help create more eco-friendly recreational spaces."
            />
          </div>
        </div>
      </section>

      {/* Episodes Section */}
      <section id="episodes" className="py-20 bg-[#2c1810]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#DEB887]">Episodes</h2>
          <div className="space-y-16">
            <EpisodeCard
              title="Ethics in Fashion"
              videoPath="/videos/fashion-ethics.mp4"
              description="In this episode, we explore how AI is transforming the fashion industry—and the ethical questions it raises around creativity, labor, bias, and sustainability."
              citations={[
                <a href="https://techpacker.com/blog/design/how-artificial-intelligence-is-revolutionizing-the-fashion-industry/" target="_blank" rel="noopener noreferrer" className="text-[#DEB887] hover:underline">Baukh, O. (2024). How AI is Revolutionizing the Fashion Industry. Techpacker.</a>,
                <a href="https://www.forbes.com/councils/theyec/2023/02/21/artificial-intelligence-in-fashion/" target="_blank" rel="noopener noreferrer" className="text-[#DEB887] hover:underline">Forbes Councils. (2023). AI in Fashion. Forbes.</a>,
                <a href="https://www.mckinsey.com/industries/retail/our-insights/generative-ai-unlocking-the-future-of-fashion" target="_blank" rel="noopener noreferrer" className="text-[#DEB887] hover:underline">McKinsey & Company. (2023). Generative AI: Unlocking the Future of Fashion.</a>,
                <a href="https://time.com/7022660/shein-ai-fast-fashion/" target="_blank" rel="noopener noreferrer" className="text-[#DEB887] hover:underline">TIME Magazine. (2024). How AI Could Transform Fast Fashion for the Better– or Worse.</a>,
                <a href="https://www.thefashionguild.com/post/the-ethical-dilemma-of-ai-in-fashion-navigating-innovation-and-responsibility" target="_blank" rel="noopener noreferrer" className="text-[#DEB887] hover:underline">The Fashion Guild. (2024). The Ethical Dilemma of AI in Fashion: Navigating Innovation and Responsibility.</a>,
                <a href="https://www.researchgate.net/publication/387871658_The_ethical_thread_AI's_role_in_the_tapestry_of_fashion" target="_blank" rel="noopener noreferrer" className="text-[#DEB887] hover:underline">ResearchGate. (2024). The Ethical Thread: AI's Role in the Fabric of Fashion.</a>,
                <a href="https://blog.stateless.nyc/what-are-the-ethical-implications-of-using-ai-in-fashion-design-in-2024-2/" target="_blank" rel="noopener noreferrer" className="text-[#DEB887] hover:underline">Stateless NYC. (2024). What are the Ethical Implications of using AI in Fashion Design in 2024?</a>
              ]}
            />

            <EpisodeCard
              title="Ethics in Golf Courses"
              videoPath="/videos/golf-ethics.mp4"
              description="In this episode, we explore the hidden environmental cost of golf courses and how AI is being used to make them more sustainable—while unpacking the ethical tradeoffs of letting technology manage nature."
              citations={[
                <a href="https://www.greenmatters.com/p/golf-courses-environmental-impact" target="_blank" rel="noopener noreferrer" className="text-[#DEB887] hover:underline">Green Matters. (2023). The Environmental Impact of Golf Courses.</a>,
                <a href="https://www.cnn.com/2021/12/08/golf/climate-change-sustainability-spt-intl-cmd/index.html" target="_blank" rel="noopener noreferrer" className="text-[#DEB887] hover:underline">CNN. (2021). How Golf Courses Are Adapting to Climate Change.</a>,
                <a href="https://newtrierpoliticaljournal.org/766/history-and-society/golf-courses-are-an-environmental-catastrophe/" target="_blank" rel="noopener noreferrer" className="text-[#DEB887] hover:underline">New Trier Political Journal. (2023). Golf Courses Are an Environmental Catastrophe.</a>,
                <a href="https://players1st.com/blog/ai-driven-irrigation-increases-sustainability-and-cut-expenses" target="_blank" rel="noopener noreferrer" className="text-[#DEB887] hover:underline">Players 1st. (2023). AI-Driven Irrigation Increases Sustainability and Cuts Expenses.</a>,
                <a href="https://gcmonline.com/course/environment/news/autonomous-mowers-revolutionizing-golf-course-management" target="_blank" rel="noopener noreferrer" className="text-[#DEB887] hover:underline">Golf Course Management. (2023). Autonomous Mowers Revolutionizing Golf Course Management.</a>
              ]}
            />

            <EpisodeCard
              title="Ethics in Startups"
              videoPath="/videos/startup-ethics.mp4"
              description="In this episode, we examine the ethical dilemmas that arise in early-stage startups, exploring how founders navigate the tension between innovation and integrity in the face of rapid growth, pressure, and tough choices."
              citations={[
                <a href="https://www.nytimes.com/2020/01/18/technology/clearview-privacy-facial-recognition.html" target="_blank" rel="noopener noreferrer" className="text-[#DEB887] hover:underline">The New York Times. (2020). The Secretive Company That Might End Privacy as We Know It.</a>,
                <a href="https://www.nytimes.com/2017/06/07/technology/uber-workplace-culture.html" target="_blank" rel="noopener noreferrer" className="text-[#DEB887] hover:underline">The New York Times. (2017). Inside Uber's Aggressive, Unrestrained Workplace Culture.</a>,
                <a href="https://www.wsj.com/articles/theranos-holmes-fraud-trial-verdict-11641261438" target="_blank" rel="noopener noreferrer" className="text-[#DEB887] hover:underline">The Wall Street Journal. (2022). Theranos Founder Elizabeth Holmes Found Guilty of Fraud.</a>,
                <a href="https://www.businessinsider.com/bereal-social-media-app-no-filters-2022-8" target="_blank" rel="noopener noreferrer" className="text-[#DEB887] hover:underline">Business Insider. (2022). BeReal: The Social Media App That Promises No Filters.</a>,
                <a href="https://foundation.mozilla.org/en/what-we-fund/awards/responsible-computer-science-challenge/" target="_blank" rel="noopener noreferrer" className="text-[#DEB887] hover:underline">Mozilla Foundation. (2023). Responsible Computer Science Challenge.</a>
              ]}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-[#8B4513] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">yap sesh.</h2>
          <div className="flex justify-center space-x-6 mb-6">
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <span className="sr-only">YouTube</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <p className="text-sm opacity-80">© {new Date().getFullYear()} Yap Sesh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function HostCard({ name, image, bio }: { name: string; image: string; bio: string }) {
  return (
    <div className="bg-[#4a2e1b] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="relative h-80">
        <Image 
          src={image || "/placeholder.svg"} 
          alt={name} 
          fill 
          className="object-cover object-[center_30%]" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-[#DEB887]">{name}</h3>
        <p className="text-[#E6CCB2]">{bio}</p>
      </div>
    </div>
  )
}

function EpisodeCard({
  title,
  videoPath,
  description,
  citations,
}: {
  title: string
  videoPath: string
  description: string
  citations: React.ReactNode[]
}) {
  return (
    <div className="bg-[#4a2e1b] rounded-lg overflow-hidden shadow-lg">
      <div className="aspect-video relative">
        <SelfHostedVideo videoPath={videoPath} title={title} />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-[#DEB887]">{title}</h3>
        <p className="text-[#E6CCB2] mb-6">{description}</p>

        <div>
          <h4 className="text-lg font-semibold mb-2 text-[#CD853F]">Citations</h4>
          <ul className="space-y-2 text-sm text-[#E6CCB2]">
            {citations.map((citation, index) => (
              <li key={index} className="pl-4 border-l-2 border-[#8B4513]">
                {citation}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
