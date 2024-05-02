import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import {
  Activity,
  Airplay,
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Anchor,
  Aperture,
  Archive,
  ArrowDownCircle,
  ArrowDownLeft,
  ArrowDownRight,
  ArrowDown,
  ArrowLeftCircle,
  ArrowLeft,
  ArrowRightCircle,
  ArrowRight,
  ArrowUpCircle,
  ArrowUpLeft,
  ArrowUpRight,
  ArrowUp,
  AtSign,
  Award,
  BarChart2,
  BarChart,
  BatteryCharging,
  Battery,
  BellOff,
  Bell,
  Bluetooth,
  Bold,
  BookOpen,
  Book,
  Bookmark,
  Box,
  Briefcase,
  Calendar,
  CameraOff,
  Camera,
  Cast,
  CheckCircle,
  CheckSquare,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronsDown,
  ChevronsLeft,
  ChevronsRight,
  ChevronsUp,
  Chrome,
  Circle,
  Clipboard,
  Clock,
  CloudDrizzle,
  CloudLightning,
  CloudOff,
  CloudRain,
  CloudSnow,
  Cloud,
  Code,
  Codepen,
  Codesandbox,
  Coffee,
  Columns,
  Command,
  Compass,
  Copy,
  CornerDownLeft,
  CornerDownRight,
  CornerLeftDown,
  CornerLeftUp,
  CornerRightDown,
  CornerRightUp,
  CornerUpLeft,
  CornerUpRight,
  Cpu,
  CreditCard,
  Crop,
  Crosshair,
  Database,
  Delete,
  Disc,
  DivideCircle,
  DivideSquare,
  Divide,
  DollarSign,
  DownloadCloud,
  Download,
  Dribbble,
  Droplet,
  Edit2,
  Edit3,
  Edit,
  ExternalLink,
  EyeOff,
  Eye,
  Facebook,
  FastForward,
  Feather,
  Figma,
  FileMinus,
  FilePlus,
  FileText,
  File,
  Film,
  Filter,
  Flag,
  FolderMinus,
  FolderPlus,
  Folder,
  Framer,
  Frown,
  Gift,
  GitBranch,
  GitCommit,
  GitMerge,
  GitPullRequest,
  Github,
  Gitlab,
  Globe,
  Grid,
  HardDrive,
  Hash,
  Headphones,
  Heart,
  HelpCircle,
  Hexagon,
  Home,
  Image,
  Inbox,
  Info,
  Instagram,
  Italic,
  Key,
  Layers,
  Layout,
  LifeBuoy,
  Link2,
  Link,
  Linkedin,
  List,
  Loader,
  Lock,
  LogIn,
  LogOut,
  Mail,
  MapPin,
  Map,
  Maximize2,
  Maximize,
  Meh,
  Menu,
  MessageCircle,
  MessageSquare,
  MicOff,
  Mic,
  Minimize2,
  Minimize,
  MinusCircle,
  MinusSquare,
  Minus,
  Monitor,
  Moon,
  MoreHorizontal,
  MoreVertical,
  MousePointer,
  Move,
  Music,
  Navigation2,
  Navigation,
  Octagon,
  Package,
  Paperclip,
  PauseCircle,
  Pause,
  PenTool,
  Percent,
  PhoneCall,
  PhoneForwarded,
  PhoneIncoming,
  PhoneMissed,
  PhoneOff,
  PhoneOutgoing,
  Phone,
  PieChart,
  PlayCircle,
  Play,
  PlusCircle,
  PlusSquare,
  Plus,
  Pocket,
  Power,
  Printer,
  Radio,
  RefreshCcw,
  RefreshCw,
  Repeat,
  Rewind,
  RotateCcw,
  RotateCw,
  Rss,
  Save,
  Scissors,
  Search,
  Send,
  Server,
  Settings,
  Share2,
  Share,
  ShieldOff,
  Shield,
  ShoppingBag,
  ShoppingCart,
  Shuffle,
  Sidebar,
  SkipBack,
  SkipForward,
  Slack,
  Slash,
  Sliders,
  Smartphone,
  Smile,
  Speaker,
  Square,
  Star,
  StopCircle,
  Sun,
  Sunrise,
  Sunset,
  Table,
  Tablet,
  Tag,
  Target,
  Terminal,
  Thermometer,
  ThumbsDown,
  ThumbsUp,
  ToggleLeft,
  ToggleRight,
  Tool,
  Trash2,
  Trash,
  Trello,
  TrendingDown,
  TrendingUp,
  Triangle,
  Truck,
  Tv,
  Twitch,
  Twitter,
  Type,
  Umbrella,
  Underline,
  Unlock,
  UploadCloud,
  Upload,
  UserCheck,
  UserMinus,
  UserPlus,
  UserX,
  User,
  Users,
  VideoOff,
  Video,
  Voicemail,
  Volume1,
  Volume2,
  VolumeX,
  Volume,
  Watch,
  WifiOff,
  Wifi,
  Wind,
  XCircle,
  XOctagon,
  XSquare,
  X,
  Youtube,
  ZapOff,
  Zap,
  ZoomIn,
  ZoomOut,
} from 'angular-feather/icons';

// Select some icons (use an object, not an array)
// https://www.npmjs.com/package/angular-feather
const icons = {
  Activity, //	<i-feather name="activity"></i-feather>
  Airplay, //	<i-feather name="airplay"></i-feather>
  AlertCircle, //	<i-feather name="alert-circle"></i-feather>
  AlertOctagon, //	<i-feather name="alert-octagon"></i-feather>
  AlertTriangle, //	<i-feather name="alert-triangle"></i-feather>
  AlignCenter, //	<i-feather name="align-center"></i-feather>
  AlignJustify, //	<i-feather name="align-justify"></i-feather>
  AlignLeft, //	<i-feather name="align-left"></i-feather>
  AlignRight, //	<i-feather name="align-right"></i-feather>
  Anchor, //	<i-feather name="anchor"></i-feather>
  Aperture, //	<i-feather name="aperture"></i-feather>
  Archive, //	<i-feather name="archive"></i-feather>
  ArrowDownCircle, //	<i-feather name="arrow-down-circle"></i-feather>
  ArrowDownLeft, //	<i-feather name="arrow-down-left"></i-feather>
  ArrowDownRight, //	<i-feather name="arrow-down-right"></i-feather>
  ArrowDown, //	<i-feather name="arrow-down"></i-feather>
  ArrowLeftCircle, //	<i-feather name="arrow-left-circle"></i-feather>
  ArrowLeft, //	<i-feather name="arrow-left"></i-feather>
  ArrowRightCircle, //	<i-feather name="arrow-right-circle"></i-feather>
  ArrowRight, //	<i-feather name="arrow-right"></i-feather>
  ArrowUpCircle, //	<i-feather name="arrow-up-circle"></i-feather>
  ArrowUpLeft, //	<i-feather name="arrow-up-left"></i-feather>
  ArrowUpRight, //	<i-feather name="arrow-up-right"></i-feather>
  ArrowUp, //	<i-feather name="arrow-up"></i-feather>
  AtSign, //	<i-feather name="at-sign"></i-feather>
  Award, //	<i-feather name="award"></i-feather>
  BarChart2, //	<i-feather name="bar-chart-2"></i-feather>
  BarChart, //	<i-feather name="bar-chart"></i-feather>
  BatteryCharging, //	<i-feather name="battery-charging"></i-feather>
  Battery, //	<i-feather name="battery"></i-feather>
  BellOff, //	<i-feather name="bell-off"></i-feather>
  Bell, //	<i-feather name="bell"></i-feather>
  Bluetooth, //	<i-feather name="bluetooth"></i-feather>
  Bold, //	<i-feather name="bold"></i-feather>
  BookOpen, //	<i-feather name="book-open"></i-feather>
  Book, //	<i-feather name="book"></i-feather>
  Bookmark, //	<i-feather name="bookmark"></i-feather>
  Box, //	<i-feather name="box"></i-feather>
  Briefcase, //	<i-feather name="briefcase"></i-feather>
  Calendar, //	<i-feather name="calendar"></i-feather>
  CameraOff, //	<i-feather name="camera-off"></i-feather>
  Camera, //	<i-feather name="camera"></i-feather>
  Cast, //	<i-feather name="cast"></i-feather>
  CheckCircle, //	<i-feather name="check-circle"></i-feather>
  CheckSquare, //	<i-feather name="check-square"></i-feather>
  Check, //	<i-feather name="check"></i-feather>
  ChevronDown, //	<i-feather name="chevron-down"></i-feather>
  ChevronLeft, //	<i-feather name="chevron-left"></i-feather>
  ChevronRight, //	<i-feather name="chevron-right"></i-feather>
  ChevronUp, //	<i-feather name="chevron-up"></i-feather>
  ChevronsDown, //	<i-feather name="chevrons-down"></i-feather>
  ChevronsLeft, //	<i-feather name="chevrons-left"></i-feather>
  ChevronsRight, //	<i-feather name="chevrons-right"></i-feather>
  ChevronsUp, //	<i-feather name="chevrons-up"></i-feather>
  Chrome, //	<i-feather name="chrome"></i-feather>
  Circle, //	<i-feather name="circle"></i-feather>
  Clipboard, //	<i-feather name="clipboard"></i-feather>
  Clock, //	<i-feather name="clock"></i-feather>
  CloudDrizzle, //	<i-feather name="cloud-drizzle"></i-feather>
  CloudLightning, //	<i-feather name="cloud-lightning"></i-feather>
  CloudOff, //	<i-feather name="cloud-off"></i-feather>
  CloudRain, //	<i-feather name="cloud-rain"></i-feather>
  CloudSnow, //	<i-feather name="cloud-snow"></i-feather>
  Cloud, //	<i-feather name="cloud"></i-feather>
  Code, //	<i-feather name="code"></i-feather>
  Codepen, //	<i-feather name="codepen"></i-feather>
  Codesandbox, //	<i-feather name="codesandbox"></i-feather>
  Coffee, //	<i-feather name="coffee"></i-feather>
  Columns, //	<i-feather name="columns"></i-feather>
  Command, //	<i-feather name="command"></i-feather>
  Compass, //	<i-feather name="compass"></i-feather>
  Copy, //	<i-feather name="copy"></i-feather>
  CornerDownLeft, //	<i-feather name="corner-down-left"></i-feather>
  CornerDownRight, //	<i-feather name="corner-down-right"></i-feather>
  CornerLeftDown, //	<i-feather name="corner-left-down"></i-feather>
  CornerLeftUp, //	<i-feather name="corner-left-up"></i-feather>
  CornerRightDown, //	<i-feather name="corner-right-down"></i-feather>
  CornerRightUp, //	<i-feather name="corner-right-up"></i-feather>
  CornerUpLeft, //	<i-feather name="corner-up-left"></i-feather>
  CornerUpRight, //	<i-feather name="corner-up-right"></i-feather>
  Cpu, //	<i-feather name="cpu"></i-feather>
  CreditCard, //	<i-feather name="credit-card"></i-feather>
  Crop, //	<i-feather name="crop"></i-feather>
  Crosshair, //	<i-feather name="crosshair"></i-feather>
  Database, //	<i-feather name="database"></i-feather>
  Delete, //	<i-feather name="delete"></i-feather>
  Disc, //	<i-feather name="disc"></i-feather>
  DivideCircle, //	<i-feather name="divide-circle"></i-feather>
  DivideSquare, //	<i-feather name="divide-square"></i-feather>
  Divide, //	<i-feather name="divide"></i-feather>
  DollarSign, //	<i-feather name="dollar-sign"></i-feather>
  DownloadCloud, //	<i-feather name="download-cloud"></i-feather>
  Download, //	<i-feather name="download"></i-feather>
  Dribbble, //	<i-feather name="dribbble"></i-feather>
  Droplet, //	<i-feather name="droplet"></i-feather>
  Edit2, //	<i-feather name="edit-2"></i-feather>
  Edit3, //	<i-feather name="edit-3"></i-feather>
  Edit, //	<i-feather name="edit"></i-feather>
  ExternalLink, //	<i-feather name="external-link"></i-feather>
  EyeOff, //	<i-feather name="eye-off"></i-feather>
  Eye, //	<i-feather name="eye"></i-feather>
  Facebook, //	<i-feather name="facebook"></i-feather>
  FastForward, //	<i-feather name="fast-forward"></i-feather>
  Feather, //	<i-feather name="feather"></i-feather>
  Figma, //	<i-feather name="figma"></i-feather>
  FileMinus, //	<i-feather name="file-minus"></i-feather>
  FilePlus, //	<i-feather name="file-plus"></i-feather>
  FileText, //	<i-feather name="file-text"></i-feather>
  File, //	<i-feather name="file"></i-feather>
  Film, //	<i-feather name="film"></i-feather>
  Filter, //	<i-feather name="filter"></i-feather>
  Flag, //	<i-feather name="flag"></i-feather>
  FolderMinus, //	<i-feather name="folder-minus"></i-feather>
  FolderPlus, //	<i-feather name="folder-plus"></i-feather>
  Folder, //	<i-feather name="folder"></i-feather>
  Framer, //	<i-feather name="framer"></i-feather>
  Frown, //	<i-feather name="frown"></i-feather>
  Gift, //	<i-feather name="gift"></i-feather>
  GitBranch, //	<i-feather name="git-branch"></i-feather>
  GitCommit, //	<i-feather name="git-commit"></i-feather>
  GitMerge, //	<i-feather name="git-merge"></i-feather>
  GitPullRequest, //	<i-feather name="git-pull-request"></i-feather>
  Github, //	<i-feather name="github"></i-feather>
  Gitlab, //	<i-feather name="gitlab"></i-feather>
  Globe, //	<i-feather name="globe"></i-feather>
  Grid, //	<i-feather name="grid"></i-feather>
  HardDrive, //	<i-feather name="hard-drive"></i-feather>
  Hash, //	<i-feather name="hash"></i-feather>
  Headphones, //	<i-feather name="headphones"></i-feather>
  Heart, //	<i-feather name="heart"></i-feather>
  HelpCircle, //	<i-feather name="help-circle"></i-feather>
  Hexagon, //	<i-feather name="hexagon"></i-feather>
  Home, //	<i-feather name="home"></i-feather>
  Image, //	<i-feather name="image"></i-feather>
  Inbox, //	<i-feather name="inbox"></i-feather>
  Info, //	<i-feather name="info"></i-feather>
  Instagram, //	<i-feather name="instagram"></i-feather>
  Italic, //	<i-feather name="italic"></i-feather>
  Key, //	<i-feather name="key"></i-feather>
  Layers, //	<i-feather name="layers"></i-feather>
  Layout, //	<i-feather name="layout"></i-feather>
  LifeBuoy, //	<i-feather name="life-buoy"></i-feather>
  Link2, //	<i-feather name="link-2"></i-feather>
  Link, //	<i-feather name="link"></i-feather>
  Linkedin, //	<i-feather name="linkedin"></i-feather>
  List, //	<i-feather name="list"></i-feather>
  Loader, //	<i-feather name="loader"></i-feather>
  Lock, //	<i-feather name="lock"></i-feather>
  LogIn, //	<i-feather name="log-in"></i-feather>
  LogOut, //	<i-feather name="log-out"></i-feather>
  Mail, //	<i-feather name="mail"></i-feather>
  MapPin, //	<i-feather name="map-pin"></i-feather>
  Map, //	<i-feather name="map"></i-feather>
  Maximize2, //	<i-feather name="maximize-2"></i-feather>
  Maximize, //	<i-feather name="maximize"></i-feather>
  Meh, //	<i-feather name="meh"></i-feather>
  Menu, //	<i-feather name="menu"></i-feather>
  MessageCircle, //	<i-feather name="message-circle"></i-feather>
  MessageSquare, //	<i-feather name="message-square"></i-feather>
  MicOff, //	<i-feather name="mic-off"></i-feather>
  Mic, //	<i-feather name="mic"></i-feather>
  Minimize2, //	<i-feather name="minimize-2"></i-feather>
  Minimize, //	<i-feather name="minimize"></i-feather>
  MinusCircle, //	<i-feather name="minus-circle"></i-feather>
  MinusSquare, //	<i-feather name="minus-square"></i-feather>
  Minus, //	<i-feather name="minus"></i-feather>
  Monitor, //	<i-feather name="monitor"></i-feather>
  Moon, //	<i-feather name="moon"></i-feather>
  MoreHorizontal, //	<i-feather name="more-horizontal"></i-feather>
  MoreVertical, //	<i-feather name="more-vertical"></i-feather>
  MousePointer, //	<i-feather name="mouse-pointer"></i-feather>
  Move, //	<i-feather name="move"></i-feather>
  Music, //	<i-feather name="music"></i-feather>
  Navigation2, //	<i-feather name="navigation-2"></i-feather>
  Navigation, //	<i-feather name="navigation"></i-feather>
  Octagon, //	<i-feather name="octagon"></i-feather>
  Package, //	<i-feather name="package"></i-feather>
  Paperclip, //	<i-feather name="paperclip"></i-feather>
  PauseCircle, //	<i-feather name="pause-circle"></i-feather>
  Pause, //	<i-feather name="pause"></i-feather>
  PenTool, //	<i-feather name="pen-tool"></i-feather>
  Percent, //	<i-feather name="percent"></i-feather>
  PhoneCall, //	<i-feather name="phone-call"></i-feather>
  PhoneForwarded, //	<i-feather name="phone-forwarded"></i-feather>
  PhoneIncoming, //	<i-feather name="phone-incoming"></i-feather>
  PhoneMissed, //	<i-feather name="phone-missed"></i-feather>
  PhoneOff, //	<i-feather name="phone-off"></i-feather>
  PhoneOutgoing, //	<i-feather name="phone-outgoing"></i-feather>
  Phone, //	<i-feather name="phone"></i-feather>
  PieChart, //	<i-feather name="pie-chart"></i-feather>
  PlayCircle, //	<i-feather name="play-circle"></i-feather>
  Play, //	<i-feather name="play"></i-feather>
  PlusCircle, //	<i-feather name="plus-circle"></i-feather>
  PlusSquare, //	<i-feather name="plus-square"></i-feather>
  Plus, //	<i-feather name="plus"></i-feather>
  Pocket, //	<i-feather name="pocket"></i-feather>
  Power, //	<i-feather name="power"></i-feather>
  Printer, //	<i-feather name="printer"></i-feather>
  Radio, //	<i-feather name="radio"></i-feather>
  RefreshCcw, //	<i-feather name="refresh-ccw"></i-feather>
  RefreshCw, //	<i-feather name="refresh-cw"></i-feather>
  Repeat, //	<i-feather name="repeat"></i-feather>
  Rewind, //	<i-feather name="rewind"></i-feather>
  RotateCcw, //	<i-feather name="rotate-ccw"></i-feather>
  RotateCw, //	<i-feather name="rotate-cw"></i-feather>
  Rss, //	<i-feather name="rss"></i-feather>
  Save, //	<i-feather name="save"></i-feather>
  Scissors, //	<i-feather name="scissors"></i-feather>
  Search, //	<i-feather name="search"></i-feather>
  Send, //	<i-feather name="send"></i-feather>
  Server, //	<i-feather name="server"></i-feather>
  Settings, //	<i-feather name="settings"></i-feather>
  Share2, //	<i-feather name="share-2"></i-feather>
  Share, //	<i-feather name="share"></i-feather>
  ShieldOff, //	<i-feather name="shield-off"></i-feather>
  Shield, //	<i-feather name="shield"></i-feather>
  ShoppingBag, //	<i-feather name="shopping-bag"></i-feather>
  ShoppingCart, //	<i-feather name="shopping-cart"></i-feather>
  Shuffle, //	<i-feather name="shuffle"></i-feather>
  Sidebar, //	<i-feather name="sidebar"></i-feather>
  SkipBack, //	<i-feather name="skip-back"></i-feather>
  SkipForward, //	<i-feather name="skip-forward"></i-feather>
  Slack, //	<i-feather name="slack"></i-feather>
  Slash, //	<i-feather name="slash"></i-feather>
  Sliders, //	<i-feather name="sliders"></i-feather>
  Smartphone, //	<i-feather name="smartphone"></i-feather>
  Smile, //	<i-feather name="smile"></i-feather>
  Speaker, //	<i-feather name="speaker"></i-feather>
  Square, //	<i-feather name="square"></i-feather>
  Star, //	<i-feather name="star"></i-feather>
  StopCircle, //	<i-feather name="stop-circle"></i-feather>
  Sun, //	<i-feather name="sun"></i-feather>
  Sunrise, //	<i-feather name="sunrise"></i-feather>
  Sunset, //	<i-feather name="sunset"></i-feather>
  Table, //	<i-feather name="table"></i-feather>
  Tablet, //	<i-feather name="tablet"></i-feather>
  Tag, //	<i-feather name="tag"></i-feather>
  Target, //	<i-feather name="target"></i-feather>
  Terminal, //	<i-feather name="terminal"></i-feather>
  Thermometer, //	<i-feather name="thermometer"></i-feather>
  ThumbsDown, //	<i-feather name="thumbs-down"></i-feather>
  ThumbsUp, //	<i-feather name="thumbs-up"></i-feather>
  ToggleLeft, //	<i-feather name="toggle-left"></i-feather>
  ToggleRight, //	<i-feather name="toggle-right"></i-feather>
  Tool, //	<i-feather name="tool"></i-feather>
  Trash2, //	<i-feather name="trash-2"></i-feather>
  Trash, //	<i-feather name="trash"></i-feather>
  Trello, //	<i-feather name="trello"></i-feather>
  TrendingDown, //	<i-feather name="trending-down"></i-feather>
  TrendingUp, //	<i-feather name="trending-up"></i-feather>
  Triangle, //	<i-feather name="triangle"></i-feather>
  Truck, //	<i-feather name="truck"></i-feather>
  Tv, //	<i-feather name="tv"></i-feather>
  Twitch, //	<i-feather name="twitch"></i-feather>
  Twitter, //	<i-feather name="twitter"></i-feather>
  Type, //	<i-feather name="type"></i-feather>
  Umbrella, //	<i-feather name="umbrella"></i-feather>
  Underline, //	<i-feather name="underline"></i-feather>
  Unlock, //	<i-feather name="unlock"></i-feather>
  UploadCloud, //	<i-feather name="upload-cloud"></i-feather>
  Upload, //	<i-feather name="upload"></i-feather>
  UserCheck, //	<i-feather name="user-check"></i-feather>
  UserMinus, //	<i-feather name="user-minus"></i-feather>
  UserPlus, //	<i-feather name="user-plus"></i-feather>
  UserX, //	<i-feather name="user-x"></i-feather>
  User, //	<i-feather name="user"></i-feather>
  Users, //	<i-feather name="users"></i-feather>
  VideoOff, //	<i-feather name="video-off"></i-feather>
  Video, //	<i-feather name="video"></i-feather>
  Voicemail, //	<i-feather name="voicemail"></i-feather>
  Volume1, //	<i-feather name="volume-1"></i-feather>
  Volume2, //	<i-feather name="volume-2"></i-feather>
  VolumeX, //	<i-feather name="volume-x"></i-feather>
  Volume, //	<i-feather name="volume"></i-feather>
  Watch, //	<i-feather name="watch"></i-feather>
  WifiOff, //	<i-feather name="wifi-off"></i-feather>
  Wifi, //	<i-feather name="wifi"></i-feather>
  Wind, //	<i-feather name="wind"></i-feather>
  XCircle, //	<i-feather name="x-circle"></i-feather>
  XOctagon, //	<i-feather name="x-octagon"></i-feather>
  XSquare, //	<i-feather name="x-square"></i-feather>
  X, //	<i-feather name="x"></i-feather>
  Youtube, //	<i-feather name="youtube"></i-feather>
  ZapOff, //	<i-feather name="zap-off"></i-feather>
  Zap, //	<i-feather name="zap"></i-feather>
  ZoomIn, //	<i-feather name="zoom-in"></i-feather>
  ZoomOut, //	<i-feather name="zoom-out"></i-feather>

};

@NgModule({
  declarations: [],
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }