import {
    ArrowDown,
    ArrowUp,
    Blend,
    BookType,
    Component,
    Folder, FolderCheck,
    Home,
    Image,
    LayoutDashboardIcon,
    LayoutTemplate,
    Minus,
    Palette,
    Settings,
    ShapesIcon,
    SmilePlus,
    Sparkle,
    Square,
    SquareRoundCorner,
    Trash,
    Type,
    Wallet,
    WalletCardsIcon
} from "lucide-react";
import BackgroundSetting from "@/services/Components/BackgroundSetting";
import Elements from "@/services/Components/Elements";
import AddImageSetting from "@/services/Components/AddImageSetting";
import TextSettings from "@/services/Components/TextSettings";
import AiTransformSetting from "@/services/Components/AiTransformSetting";
import FillColor from "@/services/Sharable/FillColor";
import BorderColor from "@/services/Sharable/BorderColor";
import MoveBackword from "@/services/Sharable/MoveBackword";
import MoveForward from "@/services/Sharable/MoveForward";
import BorderRadius from "@/services/Sharable/BorderRadius";
import BorderWidth from "@/services/Sharable/BorderWidth";
import Opacity from "@/services/Sharable/Opacity";
import FontFamily from "@/services/Sharable/FontFamily";
import {LetterText} from "lucide-react";
import FontStyles from "@/services/Sharable/FontStyles";
import TemplatesList from "@/services/Components/TemplatesList";
import Stickers from "@/services/Components/Stickers";

export const WorkspaceMenu = [
    {
        name: 'Home',
        icon: Home,
        path: '/workspace'
    },
    {
        name: 'Projects',
        icon: Folder,
        path: '/workspace/projects'
    },
    {
        name: 'Templates',
        icon: LayoutDashboardIcon,
        path: '/workspace/templates'
    },
    {
        name: 'Billing',
        icon: WalletCardsIcon,
        path: '/workspace/billing'
    },

]

export const canvasSizeOptions = [
    {
        name: 'vk Post',
        width: 1080,
        height: 1080,
        icon: '/vk-logo.png'
    },
    {
        name: 'Telegram Story',
        width: 1080,
        height: 1092,
        icon: '/tg-logo.png'
    },
    {
        name: 'YouTube Thumbnail',
        width: 700,
        height: 394,
        icon: '/youtube.png'
    },
    {
        name: 'YouTube Banner',
        width: 700,
        height: 394,
        icon: '/youtube-2.png'
    },
    {
        name: 'YouTube Post',
        width: 500,
        height: 500,
        icon: '/youtube.png'
    },
    {
        name: 'PowerPoint Slide',
        width: 700,
        height: 394,
        icon: '/ppt.png'
    },
    {
        name: 'Flyer (A4)',
        width: 508,
        height: 700,
        icon: '/circle.png'
    },
    {
        name: 'Telegram Post',
        width: 1280,
        height: 720,
        icon: '/tg-logo.png'
    },


    {
        name: 'Pinterest Pin',
        width: 467,
        height: 700,
        icon: '/pinterest.png'
    },
];

export const sideBarMenu = [
    {
        name: 'Шаблоны',
        desc: 'Выбери свой шаблон',
        icon: LayoutTemplate,
        component: <TemplatesList/>
    },
    {
        name: 'Элементы',
        desc: 'Выбери различные фигуры',
        icon: ShapesIcon,
        component: <Elements />
    },
    {
        name: 'Изображения',
        desc: 'Создай ИИ-генерирующийся изображение или добавь своё',
        icon: Image,
        component: <AddImageSetting />
    },
    {
        name: 'Текст',
        desc: 'Добавь заголовок и описание',
        icon: Type,
        component: <TextSettings />
    },
    {
        name: 'ИИ',
        desc: 'Больше ИИ функций для улучшения дизайна',
        icon: Sparkle,
        component: <AiTransformSetting />
    },
    {
        name: 'Задний фон',
        desc: 'Измени задний фон проекта',
        icon: Component,
        component: <BackgroundSetting />
    },
    {
        name: 'Стикеры',
        desc: 'Добавь стикер к твоему дизайну',
        icon: SmilePlus,
        component: <Stickers/>
    },
    {
        name: 'Настройки',
        desc: 'Измени или удали свой проект',
        icon: Settings
    }
]

export const ShapeList = [
    {
        name: 'Круг',
        icon: '/moon.png'
    },
    {
        name: 'Квадрат',
        icon: '/square.png'
    },
    {
        name: 'Треугольник',
        icon: '/trangle.png'
    },
    {
        name: 'Линия',
        icon: '/line.png'
    }
]

export const shapesSettingsList = [
    {
        name: 'Fill',
        icon: Palette,
        component: <FillColor />
    },
    {
        name: 'Stroke Color',
        icon: Square,
        component: <BorderColor/>
    },
    {
        name: 'Stroke Width',
        icon: Minus,
        component: <BorderWidth />
    },
    {
        name: 'Opacity',
        icon: Blend,
        component: <Opacity />
    },
    {
        name: 'Rounded Corner',
        icon: SquareRoundCorner,
        component: <BorderRadius />
    },
    {
        name: 'Bring Front',
        icon: ArrowUp,
        component: <MoveForward />
    },
    {
        name: 'Move Back',
        icon: ArrowDown,
        component: <MoveBackword />
    },
    // {
    //     name: 'Delete',
    //     icon: Trash
    // }
]

// if we`re adding this in link tab we`re getting regarding result on image
export const AITransformationSettings = [
    {
        name: 'Background Remove',
        command: 'e-bgremove',
        image: '/remove-bg.jpg'
    },
    {
        name: 'Change Background',
        command: 'e-changebg-prompt-snow',
        image: '/change-bg.jpg',
        input: true
    },
    {
        name: 'Generative fill',
        command: 'bg-genfill,w-1000,h-960,cm-pad_resize',
        image: '/generative-fill.png'
    },
    {
        name: 'AI drop shadow',
        command: 'e-dropshadow',
        image: '/shadow.jpeg'
    },
    {
        name: 'Upscale',
        command: 'e-upscale',
        image: '/upscale.png'
    },
    {
        name: 'Smart crop',
        command: 'fo-auto',
        image: '/smartcrop.png'
    },
    {
        name: 'Contrast',
        command: 'e-contrast',
        image: '/e-contrast.png'
    },
    {
        name: 'Grayscale',
        command: 'e-grayscale',
        image: '/grayscale.png'
    },
    {
        name: 'Blur',
        command: 'bl-10',
        image: '/e-blur.png'
    },
    {
        name: 'Flip',
        command: 'e-flip',
        image: '/e-flip.png'
    }
]


export const TextSettingsList = [
    {
        name: 'Fill',
        icon: Palette,
        //   component: <FillColor />
    },
    {
        name: 'Stroke Color',
        icon: Square,
        //  component: <BorderColor />
    },
    {
        name: 'Stroke Width',
        icon: Minus,
        //  component: <BorderWidth />
    },
    {
        name: 'Opacity',
        icon: Blend,
        //  component: <Opacity />
    },
    {
        name: 'Font',
        icon: BookType,
        component: <FontFamily/>
    },
    {
        name: 'Styles',
        icon: LetterText,
        component: <FontStyles/>
    },
    {
        name: 'Bring Front',
        icon: ArrowUp,
        //  component: <MoveForward />
    },
    {
        name: 'Move Back',
        icon: ArrowDown,
        //component: <MoveBackword />
    },
]

export const FontFamilyList = [
    "Arial",
    "Arial Black",
    "Verdana",
    "Helvetica",
    "Tahoma",
    "Trebuchet MS",
    "Times New Roman",
    "Georgia",
    "Garamond",
    "Courier New",
    "Brush Script MT",
    "Palatino",
    "Bookman",
    "Comic Sans MS",
    "Impact",
    "Lucida Sans Unicode",
    "Geneva",
    "Lucida Console",
]


export const StickerList = [
    'https://cdn-icons-png.flaticon.com/256/428/428094.png',
    'https://cdn-icons-png.flaticon.com/256/2111/2111463.png',
    'https://cdn-icons-png.flaticon.com/256/5968/5968764.png',
    'https://cdn-icons-png.flaticon.com/256/1384/1384060.png',
    'https://cdn-icons-png.flaticon.com/256/733/733585.png',
    'https://cdn-icons-png.flaticon.com/256/2111/2111646.png',
    'https://cdn-icons-png.flaticon.com/256/4494/4494477.png',
    'https://cdn-icons-png.flaticon.com/256/281/281764.png',
    'https://cdn-icons-png.flaticon.com/256/1409/1409941.png',
    'https://cdn-icons-png.flaticon.com/256/10851/10851235.png',
    'https://cdn-icons-png.flaticon.com/256/520/520460.png',
    'https://cdn-icons-png.flaticon.com/256/1791/1791311.png',
    'https://cdn-icons-png.flaticon.com/256/1791/1791320.png',
    'https://cdn-icons-png.flaticon.com/256/1791/1791292.png',
    'https://cdn-icons-png.flaticon.com/256/1791/1791355.png',
    'https://cdn-icons-png.flaticon.com/256/1791/1791307.png',
    'https://cdn-icons-png.flaticon.com/256/7996/7996409.png',
    'https://cdn-icons-png.flaticon.com/256/8760/8760748.png',
    'https://cdn-icons-png.flaticon.com/256/5171/5171530.png',
    'https://cdn-icons-png.flaticon.com/256/5175/5175169.png',
    'https://cdn-icons-png.flaticon.com/256/7096/7096435.png',
    'https://cdn-icons-png.flaticon.com/256/346/346167.png',
    'https://cdn-icons-png.flaticon.com/256/1776/1776968.png',
    'https://cdn-icons-png.flaticon.com/256/1497/1497177.png',
    'https://cdn-icons-png.flaticon.com/256/2517/2517029.png',
    'https://cdn-icons-png.flaticon.com/256/2276/2276906.png',
    'https://cdn-icons-png.flaticon.com/256/6604/6604292.png',
    'https://cdn-icons-png.flaticon.com/256/6010/6010131.png',
    'https://cdn-icons-png.flaticon.com/256/11167/11167978.png',
    'https://cdn-icons-png.flaticon.com/256/11145/11145432.png',
    'https://cdn-icons-png.flaticon.com/256/7645/7645528.png',
    'https://cdn-icons-png.flaticon.com/256/16116/16116383.png',
    'https://cdn-icons-png.flaticon.com/256/639/639373.png'
]
export    const options = [
    {
        name: 'Рабочая панель',
        icon: FolderCheck,
        path: '/workspace/'
    },
    {
        name: 'Мои проекты',
        icon: FolderCheck,
        path: '/workspace/projects'
    },
    {
        name: 'Мои шаблоны',
        icon: LayoutTemplate,
        path: '/workspace/templates'
    },

]

export const plans = [
    {
        name: "Базовый",
        price: "₽499",
        description: "Отличный старт для новичков!",
        features: [
            "До 10 дизайнов",
            "Базовые шаблоны",
            "Ограниченный доступ к AI-генерации",
        ],
        color: "border-green-400",
    },
    {
        name: "Про",
        price: "₽999",
        description: "Для профессионалов!",
        features: [
            "Безлимитные дизайны",
            "Премиум шаблоны",
            "Доступ ко всем AI-инструментам",
        ],
        color: "border-blue-500",
    },
    {
        name: "Команда",
        price: "₽1999",
        description: "Для больших команд!",
        features: [
            "Все возможности Pro",
            "Командное сотрудничество",
            "Приоритетная поддержка",
        ],
        color: "border-purple-500",
    },
];

