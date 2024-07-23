contract GenericToken is ERC20, ERC20Burnable, Pausable, AccessControl {
 constructor(string memory name_, string memory symbol_) ERC20(name_, symbol_) {
   _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
   _mint(msg.sender, 1000000 * 10**decimals());
 }