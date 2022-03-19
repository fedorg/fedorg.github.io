export default function Bio() {
	return (<>
		<div className="row header"></div>
		<div className="row section">
			<div className="seven columns contacts">
				<div className="row">
					<h4>Fedor Golishevskii</h4>
				</div>
				<p>Age: 28<br /> Location: Warsaw<br />
					<a href="mailto:fed0000r@gmail.com">fed0000r@gmail.com</a><br />
					{/* <a href="tel:+79117174549">+7(911) 717-45-49</a> <br /> */}
					<a href="https://sberdevices.ru"><span className="workplace">SberDevices</span></a>
				</p>
				<div className="row link-icons">
					<a href="https://github.com/fedorg"><i className="fa fa-github"></i></a>
					{/* <a href="https://vk.com/kerneloops"><i className="fa fa-vk"></i></a> */}
					<a href="https://wa.me/qr/FYU2V6USSYINE1"><i className="fa fa-whatsapp"></i></a>
					<a href="skype:golishevski?chat"><i className="fa fa-skype"></i></a>
					<a href="https://www.linkedin.com/in/golishevski"><i className="fa fa-linkedin"></i></a>
					<a href="https://www.twitter.com/fed0rg"><i className="fa fa-twitter"></i></a>
				</div>
			</div>
			<div className="five columns">
				<div className="avatar">
					<img alt="avatar" title="" src="/a872baa67fdf560b93551310840dc081.jpg" />
				</div>
			</div>
		</div>
		<div className="row section">
			<div className="six columns">
				<h4>Key skills</h4>
				<ul className="nobullets">
					<li><code>git</code><code>svn</code></li>
					<li><code>С++14</code><code>boost</code></li>
					<li><code>Unreal Engine 4 C++</code></li>
					<li><code>ES2016</code><code>node.js</code></li>
					<li><code>TypeScript 2</code></li>
				</ul>
			</div>
			<div className="six columns">
				<h4>Tech</h4>
				<ul className="split nobullets">
					<li><code>HTML5</code><code>CSS3</code><code>JS</code></li>
					<li><code>NW.js</code><code>Electron</code></li>
					<li><code>Emscripten</code></li>
					<li><code>Mocha</code><code>Chai</code><code>TestNG</code></li>
					<li><code>MySQL</code></li>
					<li><code>Azure NoSQL</code></li>
					<li><code>Gitlab CI</code><code>gulp</code></li>
				</ul>
				<ul className="split nobullets">
					<li><code>С</code></li>
					<li><code>Go 1.7</code></li>
					<li><code>Python</code></li>
					<li><code>Java 7</code></li>
					<li><code>HLSL</code></li>
				</ul>
			</div>
		</div>
		<div className="row section">
			<div className="six columns">
				<h4>Education</h4>
				<ul>
					<li>2015 Msc Biochemistry</li>
					<li>Saint-Petersburg university</li>
				</ul>
			</div>
			<div className="six columns">
				<h4>Theory</h4>
				<ul>
					<li>“Algorithms and data structures”</li>
					<li>“Introduction to Power Electronics”</li>
				</ul>
			</div>
		</div>
		<div className="row section">
			<div className="six columns">
				<h4>Навыки</h4>
				<ul className="split">
					<li className="progskill"><span>Кроссплатформенная разработка приложений</span></li>
					<li className="progskill"><span>Взаимодействие с движком Unreal Engine 4</span></li>
					<li className="chemskill"><span>Молекулярный докинг “лиганд-рецептор” (Vina)</span></li>
				</ul>
			</div>
			<div className="six columns">
				<h4 className="captionhack">.</h4>
				<ul className="split">
					<li className="hardskill"><span>Программирование на языке C для AVR / STM32</span></li>
					<li className="softskill"><span>Английский разговорный и технический</span></li>
				</ul>
			</div>
		</div>
		<div className="row section">
			<div className="six columns">
				<h4>Interests</h4>
				<ul>
					<li>React / Redux / Rx / …</li>
					<li>C# / F# / Scala</li>
					<li>FPGA (Verilog/VHDL)</li>
					<li>linux driver development</li>
					<li>Machine learning / NN</li>
					<li>Retrosynthesis</li>
				</ul>
			</div>
			<div className="six columns">
			</div>
		</div>
		<div className="row footer">
		</div>
	</>
	)
}
