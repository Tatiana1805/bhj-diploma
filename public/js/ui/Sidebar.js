/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }
 
  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */

  static initToggleButton() {
   let button = document.querySelector('.sidebar-toggle')
button.addEventListener('click', function(e) {
  e.preventDefault();
  let selectButton = document.querySelector('.skin-blue')
  if (selectButton){
    selectButton.classList.toggle('sidebar-open')
  } 
})
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const login = document.querySelector('.menu-item_login')
    const register = document.querySelector('.menu-item_register')

    let loginModal = App.getModal('login')
    let registerModal = App.getModal('register')

    login.addEventListener('click', () => loginModal.open())
    register.addEventListener ('click', () => registerModal.open())
  }
}