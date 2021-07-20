export default function Bio() {
	return (<>
		<div className="row header"></div>
		<div className="row section">
			<div className="seven columns contacts">
				<div className="row">
					<h4>Голишевский Федор Леонидович</h4>
				</div>
				<p>Возраст: 27<br /> Родной город: Петербург<br />
					<a href="#" onClick={function (e) { e.target.href = 'mailto:fed0000xmail.com'.split('x').join('r+hi@g'); return true; }}>fed00<span style={{ "display": "none" }}>dummy2982984358@mail.ru</span>00r@gmail.com</a><br />
					<a href="tel:+79117174549">+7(911) 717-45-49</a> <br />
					<a href="https://sberdevices.ru"><span className="workplace">SberDevices</span></a>
				</p>
				<div className="row link-icons">
					<a href="https://github.com/fedorg"><i className="fa fa-github"></i></a>
					<a href="https://vk.com/kerneloops"><i className="fa fa-vk"></i></a>
					<a href="skype:golishevski?chat"><i className="fa fa-skype"></i></a>
					<a href="https://www.linkedin.com/in/golishevski"><i className="fa fa-linkedin"></i></a>
					<a href="https://www.twitter.com/fed0rg"><i className="fa fa-twitter"></i></a>
				</div>
			</div>
			<div className="five columns">
				<div className="avatar">
					{/* <Image alt="avatar" title="Фотографию поадекватней надо бы сделать" src="/devops-ave3.png" layout="fill" />
						<Image alt="avatar" title="Фотографию поадекватней надо бы сделать" src="/ave.jpg" layout="fill" /> */}
					<img alt="avatar" title="Фотографию поадекватней надо бы сделать" src="/a872baa67fdf560b93551310840dc081.png" />
				</div>
			</div>
		</div>
		<div className="row section">
			<div className="six columns">
				<h4>Уверенное владение</h4>
				<ul className="nobullets">
					<li><code>git</code><code>svn</code></li>
					<li><code>С++14</code><code>boost</code></li>
					<li><code>Unreal Engine 4 C++</code></li>
					<li><code>ES2016</code><code>node.js</code></li>
					<li><code>TypeScript 2</code></li>
				</ul>
			</div>
			<div className="six columns">
				<h4>Умею работать</h4>
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
				<h4>Образование</h4>
				<ul>
					<li>Высшее: СПБГУ ИХ, биохимия 2015</li>
					<li>Диплом на тему “Синтез и биологическая активность 17-аминоэстрогенов”</li>
					<li>1 год опыта работы химиком-синтетиком (Кемконсалт)</li>
				</ul>
			</div>
			<div className="six columns">
				<h4>Курсы MOOC</h4>
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
					<li className="progskill"><span>Создание бизнес-логики для веба</span></li>
					<li className="chemskill"><span>Синтез и очистка органических веществ</span></li>
					<li className="chemskill"><span>Определение структуры вещества: ЯМР, МС, ЖХ</span></li>
					<li className="chemskill"><span>Молекулярный докинг “лиганд-рецептор” (Vina)</span></li>
				</ul>
			</div>
			<div className="six columns">
				<h4 className="captionhack">.</h4>
				<ul className="split">
					<li className="hardskill"><span>Знание принципов работы и разработки импульсных источников питания</span></li>
					<li className="hardskill"><span>Разработка (Diptrace / Altium) и отладка электронных устройств</span></li>
					<li className="hardskill"><span>Программирование на языке C для AVR / STM32</span></li>
					<li className="softskill"><span>Английский разговорный и технический</span></li>
					<li className="softskill"><span>Разбираюсь в сложных мемах</span></li>
					<li className="softskill"><span>Слепая печать на английском и русском</span></li>
				</ul>
			</div>
		</div>
		<div className="row section">
			<div className="six columns">
				<h4>Не буду против:</h4>
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
