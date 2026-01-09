# CoachPro Design Reference Guide

## 🎨 Color Palette

### Primary Colors
```
Dark Backgrounds:
- Primary:   #0a0a0a (bg-dark)
- Secondary: #1a1a1a (bg-dark-100)
- Tertiary:  #1e1e1e (bg-dark-200)
- Borders:   #2a2a2a (bg-dark-300)

Accent Colors:
- Gold:      #FFD700 (bg-gold) - Primary actions, highlights, top ranks
- Blue:      #00A8FF (bg-primary) - Links, secondary actions
- Green:     #22c55e - Success states, positive metrics
- Yellow:    #eab308 - Warnings, pending states
- Red:       #ef4444 - Errors, critical alerts
- Purple:    #a855f7 - Tertiary actions, special features
```

### Text Colors
```
- Primary Text:    text-white
- Secondary Text:  text-gray-100
- Muted Text:      text-gray-400
- Disabled:        text-gray-600
```

## 📐 Spacing & Layout

### Padding/Margin Scale
```
- xs:  4px   (p-1)
- sm:  8px   (p-2)
- md:  16px  (p-4)
- lg:  24px  (p-6)
- xl:  32px  (p-8)
- 2xl: 48px  (p-12)
```

### Border Radius
```
- Small:  8px   (rounded-lg)
- Medium: 12px  (rounded-xl)
- Large:  16px  (rounded-2xl)
- Circle: 9999px (rounded-full)
```

### Container Widths
```
- Sidebar:     256px (w-64)
- Card Max:    Full width in grid
- Modal:       800px (max-w-3xl)
- Form Input:  Full width
```

## 🎯 Component Patterns

### Cards
```jsx
<Card hover>
  {/* Content with hover effect */}
</Card>

<Card className="border-primary/30">
  {/* Accent border card */}
</Card>
```

### Buttons
```jsx
<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="danger">Delete</Button>

<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

<Button icon={IconName}>With Icon</Button>
```

### Badges
```jsx
<Badge variant="primary">Primary</Badge>
<Badge variant="gold">Gold</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="purple">Purple</Badge>

<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>
```

### Stat Cards
```jsx
<StatCard
  icon={IconName}
  label="Label Text"
  value="Value"
  change="+12%"
  iconColor="bg-primary"
/>
```

## 📊 Chart Styling

### Common Chart Config
```jsx
<ResponsiveContainer width="100%" height={300}>
  <BarChart data={data}>
    <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
    <XAxis stroke="#9ca3af" />
    <YAxis stroke="#9ca3af" />
    <Tooltip
      contentStyle={{
        backgroundColor: '#1a1a1a',
        border: '1px solid #2a2a2a',
        borderRadius: '8px'
      }}
    />
    <Bar dataKey="value" fill="#FFD700" radius={[8, 8, 0, 0]} />
  </BarChart>
</ResponsiveContainer>
```

## 🎨 Design Principles

### 1. Minimalism
- Clean layouts with ample whitespace
- No excessive decorations
- Focus on content and data
- Professional corporate aesthetic

### 2. Consistency
- Reuse components (Card, Button, Badge)
- Maintain color scheme throughout
- Consistent spacing and sizing
- Predictable interaction patterns

### 3. Hierarchy
```
Primary Actions:    Gold buttons, large text
Secondary Actions:  Secondary buttons, medium text
Tertiary Actions:   Outline buttons, small text
```

### 4. Feedback
- Hover effects on interactive elements
- Loading states for data fetching
- Success/Error messages for actions
- Color coding for status indicators

## 🔤 Typography

### Font Sizes
```
- Display:    text-6xl (60px)
- Heading 1:  text-3xl (30px)
- Heading 2:  text-2xl (24px)
- Heading 3:  text-xl (20px)
- Body:       text-base (16px)
- Small:      text-sm (14px)
- Tiny:       text-xs (12px)
```

### Font Weights
```
- Regular:    font-normal (400)
- Medium:     font-medium (500)
- Semibold:   font-semibold (600)
- Bold:       font-bold (700)
```

## 🎭 State Indicators

### Performance Scores
```
High (80-100):     text-green-400
Medium (60-79):    text-yellow-400
Low (<60):         text-red-400
```

### Attendance
```
Good (85-100):     text-green-400
Average (70-84):   text-yellow-400
Poor (<70):        text-red-400
```

### Status Badges
```
Active/Completed:  variant="success"
Pending:           variant="warning"
Cancelled/Failed:  variant="danger"
Scheduled:         variant="primary"
```

### Rankings
```
Rank 1:            Gold (#FFD700)
Rank 2:            Silver (#d1d5db)
Rank 3:            Bronze (#ea580c)
Rank 4-10:         Blue (text-primary)
Rank 11+:          White (text-white)
```

## 🎪 Animations

### Subtle Transitions
```css
transition-all duration-200    /* Quick state changes */
transition-all duration-300    /* Medium transitions */
transition-colors duration-200 /* Color only */
```

### Hover Effects
```css
hover:-translate-y-1          /* Lift effect */
hover:border-gold/50          /* Border glow */
hover:bg-dark-300             /* Background change */
hover:shadow-lg               /* Add shadow */
```

### Loading States
```jsx
<div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
```

## 📱 Responsive Breakpoints

```
Mobile:     < 768px   (1 column)
Tablet:     768-1023px (2 columns)
Desktop:    1024-1919px (3 columns)
Large:      > 1920px   (4 columns)

Tailwind Classes:
- sm:   640px
- md:   768px
- lg:   1024px
- xl:   1280px
- 2xl:  1536px
```

## 🎯 Icon Usage

### Icon Sizes
```
- Small:   w-4 h-4 (16px)
- Medium:  w-5 h-5 (20px)
- Large:   w-6 h-6 (24px)
- XL:      w-8 h-8 (32px)
```

### Icon + Text Pattern
```jsx
<div className="flex items-center gap-2">
  <Icon className="w-5 h-5 text-primary" />
  <span>Text</span>
</div>
```

## 🎨 Background Patterns

### Gradient Backgrounds
```jsx
// Accent cards
bg-gradient-to-br from-primary/5 to-transparent

// Avatar backgrounds
bg-gradient-to-br from-gold to-primary

// Hover states
hover:bg-gradient-to-r hover:from-gold/10
```

### Card Backgrounds
```jsx
// Standard
bg-dark-100 border border-dark-300

// Hover
bg-dark-200 hover:bg-dark-300

// Active/Selected
bg-gold/10 border border-gold/30
```

## 📋 Form Styling

### Input Fields
```jsx
<input
  className="w-full bg-dark-200 border border-dark-300 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
  placeholder="Placeholder text"
/>
```

### Select Dropdowns
```jsx
<select
  className="w-full bg-dark-200 border border-dark-300 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent appearance-none"
>
  <option>Option 1</option>
</select>
```

## 🎯 Best Practices

1. **Always use components**: Card, Button, Badge, StatCard
2. **Maintain spacing**: Use consistent padding and margins
3. **Color meaning**: Use colors consistently for status
4. **Hover feedback**: Interactive elements should respond
5. **Loading states**: Show spinners during data fetch
6. **Empty states**: Provide helpful messages when no data
7. **Responsive**: Test on mobile, tablet, desktop
8. **Accessibility**: Ensure good contrast and clickable areas

## 🚀 Quick Reference

### Create a new page:
1. Use Layout component as wrapper
2. Add page heading with title and subtitle
3. Use grid for cards/stats
4. Maintain consistent spacing (space-y-6)
5. Follow existing patterns from similar pages

### Add a new feature:
1. Check if component exists
2. Reuse existing components
3. Follow color scheme
4. Keep it minimal and clean
5. Test responsiveness

---

**Remember: Professional, Clean, Minimalistic, Corporate**
