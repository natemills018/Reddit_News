
interface NewsCardProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    }

    

    const NewsCard: React.FC<NewsCardProps> = ({ title, description, imageUrl, link }) => {
        return (
            <div className="news-card">
                <a href={link} target="_blank" rel="noopener noreferrer" className="block">
                    <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">{title}</h2>
                        <p className="text-gray-700 mb-4">{description}</p>
                        <span className="text-blue-500 hover:underline">Read more</span>
                    
                    </div>
                </a>    
            </div>
        );
    }
export default NewsCard;
