package lv.autentica.HardwareRequestApp.models.enums;

public enum Type {

    //belongs to category computers
    LAPTOPS,
    TABLETS,
    PERSONAL_COMPUTERS,

    //belongs to category computer components
    CPU,
    HDD,
    SSD,
    RAM,
    MOTHERBOARD,
    VIDEO_CARD,
    SOUND_CARD,
    POWER_SUPPLY,
    COOLING_FAN,
    CARD_READER,

    //belongs to category monitors
    SCREEN_SIZE_19,
    SCREEN_SIZE_21,
    SCREEN_SIZE_25,

    //belongs to category accessories
    MOUSE,
    KEYBOARD,
    MOUSE_PAD,
    STYLUS,

    //belongs to category audio & video
    HEADPHONES,
    SPEAKERS,
    MICROPHONES,
    WEB_CAMERA,
    SECURITY_CAMERA,

    //belongs to category projectors and screens
    PROJECTORS,
    PROJECTOR_SCREENS,

    //belongs to category printers and scanners
    PRINTER,
    SCANNER,
    CARTRIDGES,

    //belongs to category cables and adapters
    HDMI_CABLE,
    VGA_CABLE,
    DVI_CABLE,
    LAPTOP_ADAPTERS,
    MONITOR_ADAPTERS,
    USB_CABLE,

    //belongs to category networking devices
    ROUTER,
    NETWORK_ADAPTER,
    SWITCH,


    //belongs to category OTHERS:
    MEMORY_CARDS, // others
    USB_FLASH_MEMORY, // others
    BATTERIES_AA,
    BATTERIES_AAA,
    LAPTOP_CASE_size_M,
    LAPTOP_CASE_size_L,

    OTHERS

}
